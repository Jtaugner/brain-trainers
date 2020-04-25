import React, {useState} from 'react';
import './gamePage.scss'
import {connect} from "react-redux";
import TopMenu from "../topMenu/topMenu"
import {
    selectDifficult,
    selectGame,
    selectGameLevel,
    selectGameName,
    selectGameProgressByDifficult,
    selectMoney
} from "../../store/selectors";
import ReturnBack from "../returnBack/returnBack";
import ShultzGame from '../games/shultzGame/shultzGame'
import GameDone from "./gameDone/gameDone";
import {moneyAndExpPerDifficult} from "../../projectCommon";
import {CSSTransition, SwitchTransition} from "react-transition-group";
import {addDoneLevels, addExp, addMoney, chooseLevel} from "../../store/ac";
import {getLevelsAmountByGameAndDiff} from "../../gamesCommon";
import GameDoneLose from "./gameDoneLose/gameDoneLose";

function GamePage(props) {
    console.log('game page');
    const {gameName, game, difficult, level, allMoney,
        doneLevels,
        addMoney, addExp, chooseLevel, addDoneLevels} = props;
    let gameComponent;
    let [isWin, setWin] = useState(false);
    let [isLose, setLose] = useState(false);
    let [isTimeout, setIsTimeout] = useState(false);
    let [isGame, setIsGame] = useState(true);
    let levelsCount = getLevelsAmountByGameAndDiff(game, difficult);
    let exp, money;
    if(doneLevels === level) {
        exp = moneyAndExpPerDifficult[difficult].exp;
        money = moneyAndExpPerDifficult[difficult].money;
    }else{
        exp = 0;
        money = 0;
    }
    const getWin = ()=>{
        if(doneLevels === level){
            addMoney(money);
            addExp(exp);
            if(levelsCount > level + 1){
                addDoneLevels(game, difficult, level+1);
            }
        }
        console.log('get win');
        setWin(true);
    };
    const getLose = (isTimeout)=>{
        setIsTimeout(isTimeout);
        setLose(true);
    };
    const playAgain = ()=>{
        setWin(false);
    };
    const nextLevel = ()=>{
        if(levelsCount > level + 1){
            chooseLevel(level + 1);
            setWin(false);
        }
    };
    switch (game) {
        case 'shultz': gameComponent = <ShultzGame
            getWin={getWin}
            getLose={getLose}
        />; break;
    }

    return (
        <div className={'gamePage'} >
            <TopMenu>
                {gameName}
                <div className="playAgain" onClick={()=>{
                    setIsGame(false);
                    setTimeout(()=>{
                        setIsGame(true);
                    }, 500)

                }}/>
            </TopMenu>

            {isGame ? <SwitchTransition>
                <CSSTransition
                    key={isWin}
                    addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
                    classNames='fade-game'
                >
                    {isWin ? <GameDone level={level}
                                       exp={exp}
                                       money={money}
                                       allMoney={allMoney}
                                       playAgain={playAgain}
                                       nextLevel={nextLevel}
                                       showNextLevel={levelsCount > level + 1}

                    /> : isLose ? <GameDoneLose
                        isTimeout={isTimeout}
                        allMoney={allMoney}
                    /> :gameComponent}
                </CSSTransition>
            </SwitchTransition> : ''}



            <ReturnBack to={'/levels'}/>
        </div>
    );
}

export default connect((store, ownProps) => ({
    game: selectGame(store),
    gameName: selectGameName(store),
    difficult: selectDifficult(store),
    level: selectGameLevel(store),
    allMoney: selectMoney(store),
        doneLevels: selectGameProgressByDifficult(store),
    }),
    (dispatch)=>({
        chooseLevel: (level) => dispatch(chooseLevel(level)),
        addMoney: (money) => dispatch(addMoney(money)),
        addExp: (exp) => dispatch(addExp(exp)),
        addDoneLevels: (game, difficult, doneLevels) => dispatch(addDoneLevels(game, difficult, doneLevels))
    })
)(GamePage);
