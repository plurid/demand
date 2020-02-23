import {
    Indexed,
} from '@plurid/plurid-data';

import {
    TerminalPluriverse,
} from '../../../../data/interfaces';



export const DATA_ADD_PLURIVERSE = 'DATA_ADD_PLURIVERSE';
export interface DataAddPluriverseAction {
    type: typeof DATA_ADD_PLURIVERSE;
    payload: TerminalPluriverse;
}


export const DATA_SET_ACTIVE_PLURIVERSE = 'DATA_SET_ACTIVE_PLURIVERSE';
export interface DataSetActivePluriverseAction {
    type: typeof DATA_SET_ACTIVE_PLURIVERSE;
    payload: string;
}



export interface State {
    pluriverses: Indexed<TerminalPluriverse>;
    activePluriverse: string;
}


export type Actions = DataAddPluriverseAction
    | DataSetActivePluriverseAction;
