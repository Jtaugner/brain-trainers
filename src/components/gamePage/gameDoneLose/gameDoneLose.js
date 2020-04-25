import React from 'react';
import './gameDoneLose.scss'
import GameHomeLink from "../gameHomeLink/GameHomeLink";
import GamePlayAgain from "../gamePlayAgain/GameHomeLink";
import PlayerLevel from "../../playerLevel/playerLevel";

function GameDoneLose(props) {
    const {playAgain, isTimeout, allMoney} = props;
    return (
        <>
            <div className="blackout game-done__blackout"/>
            <div className={'close-game game-done game-done_lose'}>
                <div className={'close-game__header'}>
                    <h3>{isTimeout ? 'Время вышло' : 'Уровень не пройден'}</h3>
                </div>
                <div className="game-done__flex">
                    <PlayerLevel/>
                    +0
                </div>
                <div className="game-done__flex game-done__flex_money">
                    <div className="moneyBlock">
                        <div className="moneyBlock__money">
                            <div className="moneyPic"/>
                            <span className={'new-money'}>{allMoney}</span>
                        </div>
                    </div>
                    +0
                </div>
                <div className="game-done__buttons">
                    <GameHomeLink/>
                    <GamePlayAgain playAgain={playAgain}/>
                </div>
            </div>

        </>
    );
}

export default GameDoneLose;
