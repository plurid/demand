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

import {
    runCommand,
} from '../../services/logic/command';



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

    const handleEnter = () => {
        const result = runCommand(commandValue);
        console.log(result);

        setCommandValue('');
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
                style={{
                    fontFamily: 'Inconsolata, Courier, monospace',
                    fontSize: '1.2rem',
                }}
                enterAtClick={handleEnter}
            />
        </StyledCommand>
    );
}


export default Command;
