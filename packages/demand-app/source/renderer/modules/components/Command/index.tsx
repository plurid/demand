import React, {
    useState,
} from 'react';

import { AnyAction } from 'redux';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

import {
    Theme,
} from '@plurid/plurid-themes';

import {
    PluridTextline,
} from '@plurid/plurid-ui-react';

import {
    uuidv4 as uuid,
} from '@plurid/plurid-functions';

import {
    StyledCommand,
    StyledCommandMark,
} from './styled';

import {
    Terminal,
} from '../../data/interfaces';

import {
    runCommand,
} from '../../services/logic/command';

import { AppState } from '../../services/state/store';
import selectors from '../../services/state/selectors';
import actions from '../../services/state/actions';



interface CommandOwnProperties {
}

interface CommandStateProperties {
    stateGeneralTheme: Theme;
    stateInteractionTheme: Theme;
}

interface CommandDispatchProperties {
    dispatchTerminalsAddTerminal: typeof actions.terminals.addTerminal;
}

type CommandProperties = CommandOwnProperties
    & CommandStateProperties
    & CommandDispatchProperties;

const Command: React.FC<CommandProperties> = (
    properties,
) => {
    /** properties */
    const {
        /** state */
        stateGeneralTheme,
        stateInteractionTheme,

        /** dispatch */
        dispatchTerminalsAddTerminal,
    } = properties;


    /** state */
    const [commandValue, setCommandValue] = useState('');


    /** handlers */
    const handleCommandChange = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        setCommandValue(event.target.value);
    }

    const handleEnter = () => {
        const result = runCommand(commandValue);
        const lines = result.split('\n');

        const terminalID = uuid();
        const terminal: Terminal = {
            id: terminalID,
            lines,
        };

        dispatchTerminalsAddTerminal(terminal);

        setCommandValue('');
    }


    /** render */
    return (
        <StyledCommand>
            <StyledCommandMark>
                >
            </StyledCommandMark>

            <PluridTextline
                text={commandValue}
                atChange={handleCommandChange}
                devisible={true}
                style={{
                    fontFamily: 'Inconsolata, Courier, monospace',
                    fontSize: '1.2rem',
                }}
                enterAtClick={handleEnter}
            />
        </StyledCommand>
    );
}


const mapStateToProperties = (
    state: AppState,
): CommandStateProperties => ({
    stateGeneralTheme: selectors.themes.getGeneralTheme(state),
    stateInteractionTheme: selectors.themes.getInteractionTheme(state),
});


const mapDispatchToProperties = (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
): CommandDispatchProperties => ({
    dispatchTerminalsAddTerminal: (
        terminal,
    ) => dispatch(
        actions.terminals.addTerminal(terminal),
    ),
});


export default connect(
    mapStateToProperties,
    mapDispatchToProperties,
)(Command);
