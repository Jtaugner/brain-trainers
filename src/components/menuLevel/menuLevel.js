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
    const bgStyle = 'linear-gradient(to right, #d8d0ff ' + (levelsDone/allLevels*100)+ '%, #eee 0%)';
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
                <div className="game-progress" style={{background: bgStyle}} />
                <div className="game-doneLevels">
                    Пройдено: {levelsDone} / {allLevels}
                </div>
            </div>
        </div>
    )
}

export default MenuLevel;
