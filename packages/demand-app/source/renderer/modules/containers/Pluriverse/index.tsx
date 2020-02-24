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

import PluridApp, {
    PluridPage,
    PluridConfiguration,
    RecursivePartial,
    SPACE_LAYOUT,
} from '@plurid/plurid-react';

import {
    StyledPluriverse,
} from './styled';

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
    statePluriverses: any;
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
    const [pluridPages, setPluridPages] = useState<PluridPage[]>([]);
    const [pluridView, setPluridView] = useState<string[]>([]);
    const [terminals, setTerminals] = useState<any[]>([]);


    /** effects */
    /** Get Pluriverse */
    useEffect(() => {
        if (stateActivePluriverse) {
            const pluriverse = statePluriverses[stateActivePluriverse];
            const {
                terminals,
            } = pluriverse;

            setTerminals(terminals);
        }
    }, [
        stateActivePluriverse,
    ]);

    /** Handle Plurid Pages and View */
    useEffect(() => {
        const terminalPluridPages = terminals.map(terminal => {
            const terminalPluridPage = {
                path: '/' + terminal.id,
                component: {
                    element: () => <Terminal />,
                },
            };
            return terminalPluridPage;
        });

        const pluridPages: PluridPage[] = [
            {
                path: '/command',
                component: {
                    element: () => <Command />,
                },
            },
            ...terminalPluridPages,
        ];

        setPluridPages(pluridPages);

        const terminalPluridView = terminals.map(terminal => {
            return '/' + terminal.id;
        });

        const pluridView = [
            '/command',
            ...terminalPluridView,
        ];

        setPluridView(pluridView);
    }, [
        terminals,
    ]);


    /** render */
    return (
        <StyledPluriverse>
            <PluridApp
                pages={pluridPages}
                configuration={pluridAppConfiguration}
                view={pluridView}
            />
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
