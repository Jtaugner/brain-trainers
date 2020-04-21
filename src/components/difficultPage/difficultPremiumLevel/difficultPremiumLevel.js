import React from 'react';
import './difficultPremiumLevel.scss'

function DifficultPremiumLevel(props) {
    return (
        <div className={'menu-game premium-game'}
             onClick={()=>{
                 console.log('start Premium game');
             }}
        >
            <div
                className={'menu-game__icon'} />
            <div className="menu-game__additional">
                <div className="game-name">Для Premium</div>
                <div className="game-desc">Создай свою игру</div>
            </div>
        </div>
    );
}

export default DifficultPremiumLevel;
