import React from 'react';
import './menuGame.scss'
import {connect} from "react-redux";
import {selectGameProgress} from "../../store/selectors";
const classNames = require('classnames');

function MenuGame(props) {
    const {name, gameClass, progress} = props;
    let isGameClosed = !progress[0];
    let levelsDone = progress[1].reduce((acc, el)=>acc+el, 0);
    let allLevels = 100;
    const menuGameClasses = classNames({
        'menu-game': true,
        [gameClass]: true,
        'menu-game_closed': isGameClosed
    });
    return (
        <div className={menuGameClasses}>
            <div
                className={'menu-game__icon'} />
            <div className="menu-game__additional">
                <div className="game-name">{name}</div>
                <div className="game-progress">
                    <div className="game-progress_done"
                         style={{width: levelsDone + '%'}} />
                </div>
                <div className="game-doneLevels">
                    Выполнено: {levelsDone} / {allLevels}
                </div>
            </div>
        </div>
    );
}

export default connect((store, ownProps)=>({
    progress: selectGameProgress(store, ownProps.gameClass)
}))(MenuGame);
