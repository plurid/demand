import React from 'react';

import PluridApp, {
    PluridPage,
    PluridConfiguration,
    RecursivePartial,
    SPACE_LAYOUT,
} from '@plurid/plurid-react';

import Terminal from '../../components/Terminal';



const Pluriverse: React.FC<any> = () => {
    const pluridPages: PluridPage[] = [
        {
            id: 'one',
            path: '/foo',
            component: {
                element: () => <Terminal />,
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
        '/foo',
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