import {
    TerminalPluriverse,
} from '../../../../data/interfaces';

import * as Types from './types';



export const addPluriverse = (
    payload: TerminalPluriverse,
): Types.DataAddPluriverseAction => {
    return {
        type: Types.DATA_ADD_PLURIVERSE,
        payload,
    };
}
