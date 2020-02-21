import React, {
    useState,
} from 'react';

import PluridApp, {
    PluridPage,
    PluridConfiguration,
    RecursivePartial,
    SPACE_LAYOUT,
} from '@plurid/plurid-react';

import Page from '../../components/Page';

import PluriverseContext from './context';



const Pluriverse: React.FC<any> = () => {
    const [pages, setPages] = useState([
        {
            id: 'one',
            path: 'https://google.com',
        },
        {
            id: 'two',
            path: 'https://plurid.com',
        },
    ]);

    // const pathbarOnChange = (
    //     event: any,
    //     id: string,
    // ) => {
    //     updateURL(event.target.value, id);
    // }

    const updateURL = (
        value: string,
        id: string,
    ) => {
        const updatedPages = pages.map(page => {
            if (page.id === id) {
                return {
                    ...page,
                    path: value,
                };
            }
            return {...page};
        });
        setPages(updatedPages);
    }

    const pluridPages: PluridPage[] = [
        {
            id: 'one',
            path: 'https://www.google.com',
            component: {
                element: () => <Page id="one" />,
            },
            root: true,
        },
        {
            id: 'two',
            path: 'https://plurid.com',
            component: {
                element: () => <Page id="two" />,
            },
            root: true,
        },
    ];

    const pluridAppConfiguration: RecursivePartial<PluridConfiguration> = {
        theme: 'plurid',
        space: {
            layout: {
                type: SPACE_LAYOUT.ZIG_ZAG,
            },
        },
        elements: {
            plane: {
                opacity: 0,
                controls: {
                    show: false,
                }
            }
        }
    };

    const pageContext = {
        pages,
        updateURL,
    };

    return (
        <PluridApp
            pages={pluridPages}
            configuration={pluridAppConfiguration}
            pageContext={PluriverseContext}
            pageContextValue={pageContext}
        />
    );
}


export default Pluriverse;
