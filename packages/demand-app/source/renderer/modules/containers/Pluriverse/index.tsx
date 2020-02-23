import React from 'react';

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
    // const {
        // /** state */
        // stateGeneralTheme,
        // stateInteractionTheme,
    // } = properties;

    const pluridPages: PluridPage[] = [
        {
            id: 'terminal1',
            path: '/terminal-1',
            component: {
                element: () => <Terminal />,
            },
        },
        {
            id: 'command',
            path: '/command',
            component: {
                element: () => <Command />,
            },
        },
    ];

    const pluridAppConfiguration: RecursivePartial<PluridConfiguration> = {
        theme: 'plurid',
        space: {
            layout: {
                type: SPACE_LAYOUT.COLUMNS,
            },
        },
        elements: {
            plane: {
                // opacity: 0,
                controls: {
                    show: false,
                },
            },
        },
    };

    const pluridView = [
        '/terminal-1',
        '/command',
    ];


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
});


const mapDispatchToProperties = (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
): PluriverseDispatchProperties => ({
});


export default connect(
    mapStateToProperties,
    mapDispatchToProperties,
)(Pluriverse);
