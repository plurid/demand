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



export interface State {
    pluriverses: Indexed<TerminalPluriverse>;
}


export type Actions = DataAddPluriverseAction;
