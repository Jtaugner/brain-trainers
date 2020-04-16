import React from 'react';
import './menuGame.scss'
function MenuGame(props) {
    const {name, gameClass} = props;
    let levelsDone = 50;
    let allLevels = 100;
    return (
        <div className={'menu-game' + ' ' + gameClass}>
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

export default MenuGame;
