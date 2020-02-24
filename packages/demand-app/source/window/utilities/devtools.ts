import installExtension, {
    REDUX_DEVTOOLS,
} from 'electron-devtools-installer';

import environment from './environment';



if (!environment.production) {
    installExtension(REDUX_DEVTOOLS);
}
