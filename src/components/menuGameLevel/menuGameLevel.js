import React from 'react';
import {connect} from "react-redux";
import {selectGameProgress} from "../../store/selectors";
import {changeRandomGame, chooseGame} from "../../store/ac";
import {Link} from "react-router-dom";
import MenuLevel from "../menuLevel/menuLevel";
import {getAllLevelsByGame} from "../../gamesCommon";

function MenuGameLevel(props) {
    const {progress, chooseGame, gameClass, switchOffRandomGame} = props;
    const isGameClosed = !progress.gameOpen;
    const levelsDone = progress.doneLevels
        .reduce((acc, el) => acc + el, 0);
    const allLevels = getAllLevelsByGame(gameClass);
    const Component = (<MenuLevel
        {...props} isGameClosed={isGameClosed}
                    levelsDone={levelsDone}
                    allLevels={allLevels}
                    chooseLevel={chooseGame}
                    showProgress={true}
        />
        );
    if(isGameClosed) return Component;
    return (
        <Link to={'/difficult'} onClick={switchOffRandomGame}>
            {Component}
            </Link>
    )
}

export default connect(
    (store, ownProps) => ({
        progress: selectGameProgress(store, ownProps.gameClass)
    }),
    (dispatch, ownProps) => ({
        chooseGame: () => dispatch(chooseGame(ownProps.gameClass)),
        switchOffRandomGame: () => dispatch(changeRandomGame(false))
    })
)(MenuGameLevel);
