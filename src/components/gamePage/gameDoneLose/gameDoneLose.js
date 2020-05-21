import React from 'react';
import './gameDoneLose.scss'
import GameHomeLink from "../gameHomeLink/GameHomeLink";
import GamePlayAgain from "../gamePlayAgain/GameHomeLink";

function GameDoneLose(props) {
    const {playAgain, msg} = props;
    return (
        <>
            <div className="blackout game-done__blackout"/>
            <div className={'close-game game-done game-done_lose'}>
                <div className={'close-game__header'}>
                    <h3> Вы проиграли :(
                       </h3>
                </div>
                <p> {msg}</p>
                <div className="game-done__buttons">
                    <GameHomeLink/>
                    <GamePlayAgain playAgain={playAgain}/>
                </div>
            </div>

        </>
    );
}

export default GameDoneLose;
