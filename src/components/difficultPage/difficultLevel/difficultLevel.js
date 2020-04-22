import React from 'react';
import './difficultLevel.scss'
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {selectGameProgress} from "../../../store/selectors";
import {chooseDifficult} from "../../../store/ac";
import MenuLevel from "../../menuLevel/menuLevel";
import {getLevelsAmountByGameAndDiff} from "../../../gamesCommon";

function DifficultLevel(props) {
    const {
        progress, chooseDifficult, difficult, game
    } = props;
    let isGameClosed = !progress.openedLevels[difficult];
    let levelsDone = progress.doneLevels[difficult];
    let allLevels = getLevelsAmountByGameAndDiff(game, difficult);
    console.log(allLevels);
    const Component = (<MenuLevel
            {...props} isGameClosed={isGameClosed}
            levelsDone={levelsDone}
            difficult={difficult}
            allLevels={allLevels}
            chooseLevel={chooseDifficult}
        />
    );
    if(isGameClosed) return Component;
    return (
        <Link to={'/levels'}>
            {Component}
            </Link>
    )
}

export default connect(
    (store, ownProps) => ({
        progress: selectGameProgress(store, ownProps.game)
    }),
    (dispatch, ownProps) => ({
        chooseDifficult: () => dispatch(chooseDifficult(ownProps.difficult))
    })
)(DifficultLevel);
