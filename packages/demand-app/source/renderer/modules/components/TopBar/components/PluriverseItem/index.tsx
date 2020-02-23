import React from 'react';

import {
    Theme,
} from '@plurid/plurid-themes';

import {
    StyledPluriverseItem,
} from './styled';

import {
    TerminalPluriverse,
} from '../../../../data/interfaces';



interface PluriverseItemProperties {
    theme: Theme;
    pluriverse: TerminalPluriverse;
}

const PluriverseItem: React.FC<PluriverseItemProperties> = (
    properties,
) => {
    /** properties */
    const {
        /** own */
        theme,
        pluriverse,
    } = properties;


    /** handlers */
    const handleClick = () => {
        console.log('click');
    }

    /** render */
    return (
        <StyledPluriverseItem
            theme={theme}
            atClick={handleClick}
        >
            {pluriverse.id}
        </StyledPluriverseItem>
    );
}


export default PluriverseItem;
