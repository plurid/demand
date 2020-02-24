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
    StyledTerminal,
    StyledTerminalLine,
} from './styled';

import {
    Terminal as ITerminal,
} from '../../data/interfaces';

import { AppState } from '../../services/state/store';
import selectors from '../../services/state/selectors';
// import actions from '../../services/state/actions';



interface TerminalOwnProperties {
    id: string;
}

interface TerminalStateProperties {
    stateGeneralTheme: Theme;
    stateInteractionTheme: Theme;
    stateTerminals: any;
}

interface TerminalDispatchProperties {
}

type TerminalProperties = TerminalOwnProperties
    & TerminalStateProperties
    & TerminalDispatchProperties;

const Terminal: React.FC<TerminalProperties> = (
    properties,
) => {
    /** properties */
    const {
        /** own */
        id,

        /** state */
        // stateGeneralTheme,
        // stateInteractionTheme,
        stateTerminals,
    } = properties;


    /** state */
    const [terminal, setTerminal] = useState<ITerminal>();


    /** effects */
    useEffect(() => {
        if (id) {
            const terminal = stateTerminals[id];
            if (terminal) {
                setTerminal(terminal);
            }
        }
    }, [
        id,
    ]);


    /** render */
    return (
        <StyledTerminal>
            {terminal && terminal.lines.map(terminalLine => {
                return (
                    <StyledTerminalLine
                        key={Math.random() + ''}
                    >
                        {terminalLine}
                    </StyledTerminalLine>
                );
            })}
        </StyledTerminal>
    );
}


const mapStateToProperties = (
    state: AppState,
): TerminalStateProperties => ({
    stateGeneralTheme: selectors.themes.getGeneralTheme(state),
    stateInteractionTheme: selectors.themes.getInteractionTheme(state),
    stateTerminals: selectors.terminals.getTerminals(state),
});


const mapDispatchToProperties = (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
): TerminalDispatchProperties => ({
});


export default connect(
    mapStateToProperties,
    mapDispatchToProperties,
)(Terminal);
