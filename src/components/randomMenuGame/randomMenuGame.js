import React from 'react';
import './randomMenuGame.scss'

function RandomMenuGame(props) {
    return (
        <div className={'menu-game'}
            onClick={()=>{
                console.log('start rand game');
            }}
        >
            <div
                className={'menu-game__icon brain'} />
            <div className="menu-game__additional">
                <div className="game-name">Случайная игра</div>
            </div>
        </div>
    );
}

export default RandomMenuGame;
