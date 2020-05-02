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
import {getLevelsAmountByGameAndDiff, getLevelsInfoByGameDiffAndLevel} from "../../gamesCommon";
import GameDoneLose from "./gameDoneLose/gameDoneLose";
import RememberNumbersGame from "../games/rememberNumbersGame/rememberNumbersGame";
import FindWordGame from "../games/findWordGame/findWordGame";
import WordInTextGame from "../games/wordInTextGame/wordInTextGame";
import FieldGame from "../games/fieldGame/fieldGame";
import RunWordsGame from "../games/runWordsGame/runWordsGame";
import ChetGame from "../games/chetGame/chetGame";
import FindLettersGame from "../games/findLettersGame/findLettersGame";
import CoupleGame from "../games/coupleGame/coupleGame";

function GamePage(props) {
    const {gameName, game, difficult, level, allMoney,
        doneLevels,
        addMoney, addExp, chooseLevel, addDoneLevels} = props;
    const levelInfo =
        getLevelsInfoByGameDiffAndLevel(game, difficult, level);
    let [isWin, setWin] = useState(false);
    let [isLose, setLose] = useState(false);
    let [loseMsg, setLoseMsg] = useState('Попробуйте снова!');
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
    const getLose = (msg)=>{
        setLoseMsg(msg);
        setLose(true);
    };
    const playAgain = ()=>{
        setLose(false);
        setWin(false);
    };
    const nextLevel = ()=>{
        if(levelsCount > level + 1){
            chooseLevel(level + 1);
            setWin(false);
        }
    };
    let GameComponent;

    switch (game) {
        case 'shultz': GameComponent = ShultzGame; break;
        case 'rememberNumbers': GameComponent = RememberNumbersGame; break;
        case 'findWord': GameComponent = FindWordGame; break;
        case 'wordInText': GameComponent = WordInTextGame; break;
        case 'field': GameComponent = FieldGame; break;
        case 'runWords': GameComponent = RunWordsGame; break;
        case 'chet': GameComponent = ChetGame; break;
        case 'findLetters': GameComponent = FindLettersGame; break;
        case 'couple': GameComponent = CoupleGame; break;
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
                    key={isWin || isLose}
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
                        msg={loseMsg}
                        allMoney={allMoney}
                        playAgain={playAgain}
                    /> :<GameComponent
                            getWin={getWin}
                            getLose={getLose}
                            levelInfo={levelInfo}
                            difficult={difficult}
                        />}
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
