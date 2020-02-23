import * as Types from './types';



export const addTerminal = (
    state: Types.State,
    action: Types.TerminalsAddTerminalAction
): Types.State => {
    const updatedState = {
        ...state,
    };

    const terminal = action.payload;

    updatedState[terminal.id] = {
        ...terminal,
    };

    return updatedState;
}
