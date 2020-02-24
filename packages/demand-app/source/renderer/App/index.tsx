import React from 'react';

import Root from './Root';

import store from '../modules/services/state/store';

import '../modules/services/utilities/devtools';



const initialState = {};
const initializedStore = store(initialState);

const App: React.FC<any> = () => {
    return (
        <Root
            store={initializedStore}
        />
    );
}


export default App;
