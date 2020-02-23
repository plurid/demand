import React, {
    useState,
} from 'react';

import {
    StyledCommand,
    StyledCommandMark,
} from './styled';

import {
    PluridTextline,
} from '@plurid/plurid-ui-react';



interface CommandProperties {
}

const Command: React.FC<CommandProperties> = (
    properties,
) => {
    /** properties */
    // const {
    // } = properties;


    /** state */
    const [commandValue, setCommandValue] = useState('');


    /** handlers */
    const handleCommandChange = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        setCommandValue(event.target.value);
    }


    /** render */
    return (
        <StyledCommand>
            <StyledCommandMark>
                >
            </StyledCommandMark>

            <PluridTextline
                text={commandValue}
                atChange={handleCommandChange}
                devisible={true}
            />
        </StyledCommand>
    );
}


export default Command;
