import React from 'react';

import PluridApp, {
    PluridPage,
    PluridConfiguration,
    RecursivePartial,
    SPACE_LAYOUT,
} from '@plurid/plurid-react';

import Command from '../../components/Command';
import Terminal from '../../components/Terminal';



const Pluriverse: React.FC<any> = () => {
    const pluridPages: PluridPage[] = [
        {
            id: 'terminal1',
            path: '/terminal-1',
            component: {
                element: () => <Terminal />,
            },
        },
        {
            id: 'command',
            path: '/command',
            component: {
                element: () => <Command />,
            },
        },
    ];

    const pluridAppConfiguration: RecursivePartial<PluridConfiguration> = {
        theme: 'plurid',
        space: {
            layout: {
                type: SPACE_LAYOUT.COLUMNS,
            },
        },
        elements: {
            plane: {
                // opacity: 0,
                controls: {
                    show: false,
                },
            },
        },
    };

    const pluridView = [
        '/terminal-1',
        '/command',
    ];


    /** render */
    return (
        <PluridApp
            pages={pluridPages}
            configuration={pluridAppConfiguration}
            view={pluridView}
        />
    );
}


export default Pluriverse;
