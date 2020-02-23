import React from 'react';

import {
    Theme,
} from '@plurid/plurid-themes';

import {
    PluridIconDocuments,
} from '@plurid/plurid-icons-react';

import {
    StyledPluriverseItem,
} from './styled';

import {
    TerminalPluriverse,
} from '../../../../data/interfaces';



interface PluriverseItemProperties {
    theme: Theme;
    pluriverse: TerminalPluriverse;
    active: boolean;
}

const PluriverseItem: React.FC<PluriverseItemProperties> = (
    properties,
) => {
    /** properties */
    const {
        /** own */
        theme,
        pluriverse,
        active,
    } = properties;


    /** handlers */
    const handleClick = () => {
        console.log('click');
    }

    /** render */
    return (
        <StyledPluriverseItem
            theme={theme}
            active={active}
            atClick={handleClick}
        >
            <PluridIconDocuments />

            {pluriverse.name || ''}
        </StyledPluriverseItem>
    );
}


export default PluriverseItem;
