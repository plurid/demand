import * as Types from './types';

import initialState from './initial';

import * as resolvers from './resolvers';



const reducer = (
    state: Types.State = initialState,
    action: Types.Actions,
): Types.State => {
    switch(action.type) {
        case Types.TERMINALS_ADD_TERMINAL:
            return resolvers.addTerminal(state, action);
        default:
            return {
                ...state,
            };
    }
}


export default reducer;
