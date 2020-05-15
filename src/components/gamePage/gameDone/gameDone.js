import React from 'react';
import './gameDone.scss'
import PlayerLevel from "../../playerLevel";
import {Link} from "react-router-dom";
import GameHomeLink from "../gameHomeLink/GameHomeLink";
import GamePlayAgain from "../gamePlayAgain/GameHomeLink";

function GameDone(props) {
    const {exp, money, allMoney, playAgain, level, showNextLevel,
        nextLevel, randomGame} = props;
    return (
        <>
            <div className="blackout game-done__blackout"/>
            <div className={'close-game game-done'}>
                <div className={'close-game__header'}>
                    <h3>Уровень {randomGame ? '' : level + 1} пройден!</h3>
                </div>
                <div className="game-done__flex">
                    <PlayerLevel/>
                    {randomGame ? '' :('+' + exp)}
                </div>
                <div className="game-done__flex game-done__flex_money">
                    <div className="moneyBlock">
                        <div className="moneyBlock__money">
                            <div className="moneyPic"/>
                            {
                                randomGame ? '' :
                                    <>
                                    <span className={'line-through'}>{allMoney - money}</span>
                                    <div className="game-done__arrow"/>
                                    </>
                            }

                            <span className={'new-money'}>{allMoney}</span>
                        </div>
                    </div>
                    {randomGame ? '' :('+' + money)}


                </div>

                <div className="game-done__buttons">
                    <GameHomeLink/>
                    <GamePlayAgain playAgain={playAgain}/>
                    {showNextLevel && !randomGame ?
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
