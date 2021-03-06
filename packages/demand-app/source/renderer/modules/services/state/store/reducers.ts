import { combineReducers } from 'redux';

import * as data from '../modules/data';
import * as shortcuts from '../modules/shortcuts';
import * as terminals from '../modules/terminals';
import * as themes from '../modules/themes';
import * as ui from '../modules/ui';



const rootReducer = combineReducers({
    data: data.reducer,
    shortcuts: shortcuts.reducer,
    terminals: terminals.reducer,
    themes: themes.reducer,
    ui: ui.reducer,
});


export default rootReducer;
