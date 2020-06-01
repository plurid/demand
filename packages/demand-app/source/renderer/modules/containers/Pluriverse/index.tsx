import React, {
    useState,
    useEffect,
} from 'react';

import { AnyAction } from 'redux';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

import {
    Theme,
} from '@plurid/plurid-themes';

import {
    PluridApplication,
    PluridPlane,
    PluridConfiguration,
    RecursivePartial,
    SPACE_LAYOUT,
} from '@plurid/plurid-react';

import {
    Indexed,
} from '@plurid/plurid-data';

import {
    StyledPluriverse,
} from './styled';

import {
    TerminalPluriverse,
} from '../../data/interfaces';

import Command from '../../components/Command';
import Terminal from '../../components/Terminal';

import { AppState } from '../../services/state/store';
import selectors from '../../services/state/selectors';
// import actions from '../../services/state/actions';



interface PluriverseOwnProperties {
}

interface PluriverseStateProperties {
    stateGeneralTheme: Theme;
    stateInteractionTheme: Theme;
    statePluriverses: Indexed<TerminalPluriverse>;
    stateActivePluriverse: string;
}

interface PluriverseDispatchProperties {
}

type PluriverseProperties = PluriverseOwnProperties
    & PluriverseStateProperties
    & PluriverseDispatchProperties;

const Pluriverse: React.FC<PluriverseProperties> = (
    properties,
) => {
    /** properties */
    const {
        /** state */
        // stateGeneralTheme,
        // stateInteractionTheme,
        statePluriverses,
        stateActivePluriverse,
    } = properties;

    const pluridAppConfiguration: RecursivePartial<PluridConfiguration> = {
        theme: 'plurid',
        space: {
            layout: {
                type: SPACE_LAYOUT.COLUMNS,
            },
        },
        elements: {
            plane: {
                controls: {
                    show: false,
                },
            },
        },
    };


    /** state */
    const [pluridPages, setPluridPages] = useState<PluridPlane[]>([]);
    const [pluridView, setPluridView] = useState<string[]>([]);
    const [pluriverse, setPluriverse] = useState<TerminalPluriverse>();


    /** effects */
    /** Get Pluriverse */
    useEffect(() => {
        if (stateActivePluriverse) {
            const pluriverse = statePluriverses[stateActivePluriverse];
            setPluriverse(pluriverse);
        }
    }, [
        stateActivePluriverse,
    ]);

    /** Handle Plurid Pages and View */
    useEffect(() => {
        if (!pluriverse) {
            return;
        }

        const terminalPluridPages = pluriverse.terminals.map(terminalID => {
            const terminalPluridPage = {
                id: terminalID,
                path: '/' + terminalID,
                component: {
                    element: () => (
                        <Terminal
                            id={terminalID}
                        />
                    ),
                },
            };
            return terminalPluridPage;
        });

        const pluridPages: PluridPlane[] = [
            {
                id: 'command',
                path: '/command',
                component: {
                    element: () => (
                        <Command
                            pluriverseID={pluriverse.id}
                        />
                    ),
                },
            },
            ...terminalPluridPages,
        ];

        console.log(pluridPages);

        setPluridPages(pluridPages);

        const terminalPluridView = pluriverse.terminals.map(terminalID => {
            return '/' + terminalID;
        });

        const pluridView = [
            '/command',
            ...terminalPluridView,
        ];

        setPluridView(pluridView);
    }, [
        statePluriverses,
        pluriverse,
    ]);


    /** render */
    return (
        <StyledPluriverse>
            {pluridPages.length > 0 && (
                <PluridApplication
                    pages={pluridPages}
                    configuration={pluridAppConfiguration}
                    view={pluridView}
                />
            )}
        </StyledPluriverse>
    );
}


const mapStateToProperties = (
    state: AppState,
): PluriverseStateProperties => ({
    stateGeneralTheme: selectors.themes.getGeneralTheme(state),
    stateInteractionTheme: selectors.themes.getInteractionTheme(state),
    statePluriverses: selectors.data.getPluriverses(state),
    stateActivePluriverse: selectors.data.getActivePluriverse(state),
});


const mapDispatchToProperties = (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
): PluriverseDispatchProperties => ({
});


export default connect(
    mapStateToProperties,
    mapDispatchToProperties,
)(Pluriverse);
