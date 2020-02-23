import {
    Terminal,
} from '../../../../data/interfaces';

import * as Types from './types';



export const addTerminal = (
    payload: Terminal,
): Types.TerminalsAddTerminalAction => {
    return {
        type: Types.TERMINALS_ADD_TERMINAL,
        payload,
    };
}
