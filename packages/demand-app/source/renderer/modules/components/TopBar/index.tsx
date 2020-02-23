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
    uuidv4 as uuid,
} from '@plurid/plurid-functions';

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
import actions from '../../services/state/actions';



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
    stateActivePluriverse: string;
}

interface TopBarDispatchProperties {
    dispatchAddPluriverse: typeof actions.data.addPluriverse;
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
        stateActivePluriverse,

        /** dispatch */
        dispatchAddPluriverse,
    } = properties;


    /** state */
    const [mouseOver, setMouseOver] = useState(false);


    /** handlers */
    const addPluriverse = () =>{
        const pluriverse: TerminalPluriverse = {
            id: uuid(),
            terminals: [],
        };
        dispatchAddPluriverse(pluriverse);
    }


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
                        const {
                            id,
                        } = pluriverse;

                        return (
                            <PluriverseItem
                                key={id}
                                theme={stateGeneralTheme}
                                pluriverse={pluriverse}
                                active={stateActivePluriverse === id}
                            />
                        );
                    })}

                    <StyledTopBarAdd>
                        <PluridIconAdd
                            size="small"
                            atClick={addPluriverse}
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
    stateActivePluriverse: selectors.data.getActivePluriverse(state),
});


const mapDispatchToProperties = (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
): TopBarDispatchProperties => ({
    dispatchAddPluriverse: (
        pluriverse,
    ) => dispatch(
        actions.data.addPluriverse(pluriverse),
    ),
});


export default connect(
    mapStateToProperties,
    mapDispatchToProperties,
)(TopBar);
