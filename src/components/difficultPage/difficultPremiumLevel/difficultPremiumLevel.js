import React from 'react';
import './difficultPremiumLevel.scss'
import {Link} from "react-router-dom";

function DifficultPremiumLevel() {
    return (
        <Link to={'/gameSettings'}>
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
        </Link>
    );
}

export default DifficultPremiumLevel;
