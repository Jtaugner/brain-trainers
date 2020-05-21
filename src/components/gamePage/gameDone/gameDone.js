import React from 'react';
import './gameDone.scss'
import PlayerLevel from "../../playerLevel";
import GameHomeLink from "../gameHomeLink/GameHomeLink";
import GamePlayAgain from "../gamePlayAgain/GameHomeLink";

function GameDone(props) {
    const {exp, money, allMoney, playAgain, level, showNextLevel,
        nextLevel, withoutPrizes} = props;
    return (
        <>
            <div className="blackout game-done__blackout"/>
            <div className={'close-game game-done'}>
                <div className={'close-game__header'}>
                    <h3>Уровень {withoutPrizes ? '' : level + 1} пройден!</h3>
                </div>
                <div className="game-done__flex">
                    <PlayerLevel/>
                    {withoutPrizes ? '' :('+' + exp)}
                </div>
                <div className="game-done__flex game-done__flex_money">
                    <div className="moneyBlock">
                        <div className="moneyBlock__money">
                            <div className="moneyPic"/>
                            {
                                withoutPrizes ? '' :
                                    <>
                                    <span className={'line-through'}>{allMoney - money}</span>
                                    <div className="game-done__arrow"/>
                                    </>
                            }

                            <span className={'new-money'}>{allMoney}</span>
                        </div>
                    </div>
                    {withoutPrizes ? '' :('+' + money)}


                </div>

                <div className="game-done__buttons">
                    <GameHomeLink/>
                    <GamePlayAgain playAgain={playAgain}/>
                    {showNextLevel && !withoutPrizes ?
                        <div
                            className="game-done__button game-done__next"
                            onClick={nextLevel}
                        /> : '' }

                </div>
            </div>

        </>
    );
}

export default GameDone;
