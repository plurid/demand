import React, {
    useState,
} from 'react';

import themes from '@plurid/plurid-themes';

import {
    StyledTopBar,
} from './styled';

import PluriverseItem from './components/PluriverseItem';

import {
    TerminalPluriverse,
} from '../../data/interfaces';



interface IndexedTerminalPluriverse {
    [key: string]: TerminalPluriverse;
}

const terminalPluriverses: IndexedTerminalPluriverse = {
    'one': {
        id: 'one',
        terminals: [],
    },
    'two': {
        id: 'two',
        terminals: [],
    },
};


const theme = themes.plurid;

const TopBar: React.FC<any> = () => {
    const [mouseOver, setMouseOver] = useState(false);

    return (
        <StyledTopBar
            onMouseEnter={() => setMouseOver(true)}
            onMouseLeave={() => setMouseOver(false)}
            onMouseMove={() => !mouseOver ? setMouseOver(true) : undefined}
            mouseOver={mouseOver}
            theme={theme}
        >
            {mouseOver && (
                <>
                    {Object.values(terminalPluriverses).map(pluriverse => {
                        return (
                            <PluriverseItem
                                key={pluriverse.id}
                                theme={theme}
                                pluriverse={pluriverse}
                            />
                        );
                    })}
                </>
            )}
        </StyledTopBar>
    );
}


export default TopBar;
