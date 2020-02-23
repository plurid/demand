import React, {
    useState,
} from 'react';

import { AnyAction } from 'redux';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

import {
    Theme,
} from '@plurid/plurid-themes';

import {
    PluridIconAdd,
} from '@plurid/plurid-icons-react';

import {
    StyledTopBar,
    StyledTopBarAdd,
} from './styled';

import PluriverseItem from './components/PluriverseItem';

import {
    TerminalPluriverse,
} from '../../data/interfaces';

import { AppState } from '../../services/state/store';
import selectors from '../../services/state/selectors';
// import actions from '../../services/state/actions';



interface IndexedTerminalPluriverse {
    [key: string]: TerminalPluriverse;
}

// const terminalPluriverses: IndexedTerminalPluriverse = {
//     'one': {
//         id: 'one',
//         terminals: [],
//     },
//     'two': {
//         id: 'two',
//         terminals: [],
//     },
// };


interface TopBarOwnProperties {
}

interface TopBarStateProperties {
    stateGeneralTheme: Theme;
    stateInteractionTheme: Theme;
    statePluriverses: IndexedTerminalPluriverse;
}

interface TopBarDispatchProperties {
}

type TopBarProperties = TopBarOwnProperties
    & TopBarStateProperties
    & TopBarDispatchProperties;

const TopBar: React.FC<TopBarProperties> = (
    properties,
) => {
    /** properties */
    const {
        /** state */
        stateGeneralTheme,
        // stateInteractionTheme,
        statePluriverses,
    } = properties;


    /** state */
    const [mouseOver, setMouseOver] = useState(false);


    /** render */
    return (
        <StyledTopBar
            onMouseEnter={() => setMouseOver(true)}
            onMouseLeave={() => setMouseOver(false)}
            onMouseMove={() => !mouseOver ? setMouseOver(true) : undefined}
            mouseOver={mouseOver}
            theme={stateGeneralTheme}
        >
            {/* {mouseOver && ( */}
                <>
                    {Object.values(statePluriverses).map(pluriverse => {
                        return (
                            <PluriverseItem
                                key={pluriverse.id}
                                theme={stateGeneralTheme}
                                pluriverse={pluriverse}
                            />
                        );
                    })}

                    <StyledTopBarAdd>
                        <PluridIconAdd
                            size="small"
                            atClick={() => {}}
                        />
                    </StyledTopBarAdd>
                </>
            {/* )} */}
        </StyledTopBar>
    );
}


const mapStateToProperties = (
    state: AppState,
): TopBarStateProperties => ({
    stateGeneralTheme: selectors.themes.getGeneralTheme(state),
    stateInteractionTheme: selectors.themes.getInteractionTheme(state),
    statePluriverses: selectors.data.getPluriverses(state),
});


const mapDispatchToProperties = (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
): TopBarDispatchProperties => ({
});


export default connect(
    mapStateToProperties,
    mapDispatchToProperties,
)(TopBar);
