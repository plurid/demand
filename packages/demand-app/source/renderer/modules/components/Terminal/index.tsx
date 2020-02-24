import React, {
    useState,
    useEffect,
} from 'react';

import { AnyAction } from 'redux';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

import {
    Theme,
} from '@plurid/plurid-themes';

import {
    StyledTerminal,
    StyledTerminalLine,
} from './styled';

import {
    Terminal as ITerminal,
} from '../../data/interfaces';

import { AppState } from '../../services/state/store';
import selectors from '../../services/state/selectors';
// import actions from '../../services/state/actions';



interface TerminalOwnProperties {
    id: string;
}

interface TerminalStateProperties {
    stateGeneralTheme: Theme;
    stateInteractionTheme: Theme;
    stateTerminals: any;
}

interface TerminalDispatchProperties {
}

type TerminalProperties = TerminalOwnProperties
    & TerminalStateProperties
    & TerminalDispatchProperties;

const Terminal: React.FC<TerminalProperties> = (
    properties,
) => {
    /** properties */
    const {
        /** own */
        id,

        /** state */
        // stateGeneralTheme,
        // stateInteractionTheme,
        stateTerminals,
    } = properties;


    /** state */
    const [terminal, setTerminal] = useState<ITerminal>();


    /** effects */
    useEffect(() => {
        if (id) {
            const terminal = stateTerminals[id];
            if (terminal) {
                setTerminal(terminal);
            }
        }
    }, [
        id,
    ]);


    // const terminalData: any[] = [
    //     'Built at: 02/23/2020 5:18:36 PM',
    //     '    Asset       Size  Chunks                   Chunk Names',
    //     'assets/meta/den.icns    131 KiB          [emitted]',
    //     'assets/meta/den.png   58.1 KiB          [emitted]',
    //     'index.html  447 bytes          [emitted]',
    //     'package.json   73 bytes          [emitted]',
    //     'renderer.js   1.95 MiB    main  [emitted]        main',
    //     'renderer.js.map   2.17 MiB    main  [emitted] [dev]  main',
    //     'Entrypoint main = renderer.js renderer.js.map',
    //     '[./node_modules/webpack/buildin/harmony-module.js] (webpack)/buildin/harmony-module.js 573 bytes {main} [built]',
    //     '[./source/renderer/App/Root/index.tsx] 146 bytes {main} [built]',
    //     '[./source/renderer/App/View/index.tsx] 325 bytes {main} [built]',
    //     '[./source/renderer/App/index.tsx] 143 bytes {main} [built]',
    //     '[./source/renderer/index.tsx] 170 bytes {main} [built]',
    //     '[./source/renderer/modules/containers/Pluriverse/index.tsx] 1.2 KiB {main} [built]',
    // ];

    /** render */
    return (
        <StyledTerminal>
            {terminal && terminal.lines.map(terminalLine => {
                return (
                    <StyledTerminalLine
                        key={Math.random() + ''}
                    >
                        {terminalLine}
                    </StyledTerminalLine>
                );
            })}
        </StyledTerminal>
    );
}


const mapStateToProperties = (
    state: AppState,
): TerminalStateProperties => ({
    stateGeneralTheme: selectors.themes.getGeneralTheme(state),
    stateInteractionTheme: selectors.themes.getInteractionTheme(state),
    stateTerminals: selectors.terminals.getTerminals(state),
});


const mapDispatchToProperties = (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
): TerminalDispatchProperties => ({
});


export default connect(
    mapStateToProperties,
    mapDispatchToProperties,
)(Terminal);
