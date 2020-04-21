import React from 'react';
import './menuLevel.scss'

const classNames = require('classnames');

function MenuLevel(props) {
    const {
        name, gameClass, chooseLevel,
        levelsDone, isGameClosed, allLevels,
        difficult
    } = props;
    const menuGameClasses = classNames({
        'menu-game': true,
        [gameClass]: true,
        'menu-game_closed': isGameClosed,
        'difficult-icon': (difficult + 1)
    });
    return (
        <div className={menuGameClasses}
             onClick={() => {
                 isGameClosed ?
                     props.onClick() :
                     chooseLevel();
             }}
        >
            <div
                className={'menu-game__icon'}>
                {(difficult+1) ? difficult+1 : ''}
            </div>
            <div className="menu-game__additional">
                <div className="game-name">{name}</div>
                <div className="game-progress">
                    <div className="game-progress_done"
                         style={{width: levelsDone + '%'}}/>
                </div>
                <div className="game-doneLevels">
                    Пройдено: {levelsDone} / {allLevels}
                </div>
            </div>
        </div>
    )
}

export default MenuLevel;
