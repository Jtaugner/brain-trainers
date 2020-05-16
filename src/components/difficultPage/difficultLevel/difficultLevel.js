import React from 'react';
import './difficultLevel.scss'
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {selectGameProgress} from "../../../store/selectors";
import {changePremiumGame, chooseDifficult} from "../../../store/ac";
import MenuLevel from "../../menuLevel/menuLevel";
import {getLevelsAmountByGameAndDiff} from "../../../gamesCommon";

function DifficultLevel(props) {
    const {
        progress, chooseDifficult, difficult, game, randomGame,
        gameDoneColor, switchOffPremiumGame
    } = props;
    let isGameClosed = !progress.openedLevels[difficult];
    let levelsDone = progress.doneLevels[difficult];
    const chooseLevel = () => {
        switchOffPremiumGame();
        chooseDifficult();
    };
    let allLevels = getLevelsAmountByGameAndDiff(game, difficult);
    const Component = (<MenuLevel
            {...props} isGameClosed={isGameClosed}
            levelsDone={levelsDone}
            difficult={difficult}
            allLevels={allLevels}
            gameDoneColor={gameDoneColor}
            chooseLevel={chooseLevel}
            showProgress={!randomGame}
        />
    );
    if(isGameClosed) return Component;
    if(randomGame){
        return <Link to={'/game'} onKeyDown={chooseDifficult}>
            {Component}
        </Link>
    }
    return (
        <Link to={'/levels'} onKeyDown={chooseDifficult}>
            {Component}
            </Link>
    )
}

export default connect(
    null,
    (dispatch, ownProps) => ({
        chooseDifficult: () => dispatch(chooseDifficult(ownProps.difficult)),
        switchOffPremiumGame: () => dispatch(changePremiumGame(false))
    })
)(DifficultLevel);
