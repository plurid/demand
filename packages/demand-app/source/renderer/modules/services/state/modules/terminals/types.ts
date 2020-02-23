import {
    Terminal,
} from '../../../../data/interfaces';



export const TERMINALS_ADD_TERMINAL = 'TERMINALS_ADD_TERMINAL';
export interface TerminalsAddTerminalAction {
    type: typeof TERMINALS_ADD_TERMINAL;
    payload: Terminal;
}



export interface State {
    [key: string]: Terminal;
}


export type Actions = TerminalsAddTerminalAction;
