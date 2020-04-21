import React from 'react';
import {connect} from "react-redux";
import {selectGameProgress} from "../../store/selectors";
import {chooseGame} from "../../store/ac";
import {Link} from "react-router-dom";
import MenuLevel from "../menuLevel/menuLevel";

function MenuGameLevel(props) {
    const {progress, chooseGame} = props;
    const isGameClosed = !progress.gameOpen;
    const levelsDone = progress.doneLevels
        .reduce((acc, el) => acc + el, 0);
    const allLevels = 100;
    const Component = (<MenuLevel
        {...props} isGameClosed={isGameClosed}
                    levelsDone={levelsDone}
                    allLevels={allLevels}
                    chooseLevel={chooseGame}
        />
        );
    if(isGameClosed) return Component;
    return (
        <Link to={'/difficult'}>
            {Component}
            </Link>
    )
}

export default connect(
    (store, ownProps) => ({
        progress: selectGameProgress(store, ownProps.gameClass)
    }),
    (dispatch, ownProps) => ({
        chooseGame: () => dispatch(chooseGame(ownProps.gameClass))
    })
)(MenuGameLevel);
