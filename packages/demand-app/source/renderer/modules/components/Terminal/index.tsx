import React from 'react';

import {
    StyledTerminal,
    StyledTerminalLine,
} from './styled';



const terminalData: any[] = [
    'Built at: 02/23/2020 5:18:36 PM',
    '    Asset       Size  Chunks                   Chunk Names',
    'assets/meta/den.icns    131 KiB          [emitted]',
    'assets/meta/den.png   58.1 KiB          [emitted]',
    'index.html  447 bytes          [emitted]',
    'package.json   73 bytes          [emitted]',
    'renderer.js   1.95 MiB    main  [emitted]        main',
    'renderer.js.map   2.17 MiB    main  [emitted] [dev]  main',
    'Entrypoint main = renderer.js renderer.js.map',
    '[./node_modules/webpack/buildin/harmony-module.js] (webpack)/buildin/harmony-module.js 573 bytes {main} [built]',
    '[./source/renderer/App/Root/index.tsx] 146 bytes {main} [built]',
    '[./source/renderer/App/View/index.tsx] 325 bytes {main} [built]',
    '[./source/renderer/App/index.tsx] 143 bytes {main} [built]',
    '[./source/renderer/index.tsx] 170 bytes {main} [built]',
    '[./source/renderer/modules/containers/Pluriverse/index.tsx] 1.2 KiB {main} [built]',
];

interface TerminalProperties {
}

const Terminal: React.FC<TerminalProperties> = (
    properties,
) => {
    /** properties */

    /** render */
    return (
        <StyledTerminal>
            {terminalData.map(terminalLine => {
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


export default Terminal;
