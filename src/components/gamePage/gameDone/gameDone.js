import React from 'react';
import './gameDone.scss'
import PlayerLevel from "../../playerLevel";
import {Link} from "react-router-dom";

function GameDone(props) {
    const {exp, money, allMoney, playAgain, level, showNextLevel,
        nextLevel} = props;
    return (
        <>
            <div className="blackout game-done__blackout"/>
            <div className={'close-game game-done'}>
                <div className={'close-game__header'}>
                    <h3>Уровень {level + 1} пройден!</h3>
                </div>
                <div className="game-done__flex">
                    <PlayerLevel/>
                    +{exp}
                </div>
                <div className="game-done__flex game-done__flex_money">
                    <div className="moneyBlock">
                        <div className="moneyBlock__money">
                            <div className="moneyPic"/>
                            <span className={'line-through'}>{allMoney - money}</span>
                            <div className="game-done__arrow"/>
                            <span className={'new-money'}>{allMoney}</span>
                        </div>
                    </div>
                    +{money}

                </div>

                <div className="game-done__buttons">
                    <Link to={'/home'}>
                        <div className="game-done__button game-done__home"/>
                    </Link>
                    <div
                        className="game-done__button game-done__again"
                        onClick={playAgain}
                    />
                    {showNextLevel ?
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
