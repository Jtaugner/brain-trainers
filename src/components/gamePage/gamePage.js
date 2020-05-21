import React, {useState} from 'react';
import './gamePage.scss'
import {connect} from "react-redux";
import TopMenu from "../topMenu/topMenu"
import {
    selectDifficult,
    selectGame,
    selectGameLevel,
    selectGameName,
    selectGameProgressByDifficult, selectLevelInfo,
    selectMoney, selectPremiumGame, selectRandGame, selectSounds
} from "../../store/selectors";
import ReturnBack from "../returnBack/returnBack";
import ShultzGame from '../games/shultzGame/shultzGame'
import GameDone from "./gameDone/gameDone";
import {moneyAndExpPerDifficult} from "../../projectCommon";
import {CSSTransition, SwitchTransition} from "react-transition-group";
import {addDoneLevels, addExp, addMoney, chooseLevel, showAdv} from "../../store/ac";
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
import {doneLevelSound, loseLevelSound} from "../../sounds";


function GamePage(props) {
    const {
        gameName, game, difficult, allMoney,
        doneLevels, randomGame,
        addMoney, addExp, chooseLevel, addDoneLevels,
        premiumGame, premiumLevelInfo,
        isSounds,
        showAdv

    } = props;
    let {level} = props;
    let levelsCount = getLevelsAmountByGameAndDiff(game, difficult);
    if (randomGame) {
        level = Math.floor(Math.random() * levelsCount);
    }
    let levelInfo;
    if(premiumGame){
        levelInfo = premiumLevelInfo
    }else{
        levelInfo =
            getLevelsInfoByGameDiffAndLevel(game, difficult, level);
    }
    let [isWin, setWin] = useState(false);
    let [isLose, setLose] = useState(false);
    let [loseMsg, setLoseMsg] = useState('Попробуйте снова!');
    let [isGame, setIsGame] = useState(true);
    let [gameDone, setGameDone] = useState(false);
    let [pause, setPause] = useState(false);
    let [exp, setExp] = useState(0);
    let [money, setMoney] = useState(0);
    const getWin = () => {
        if (gameDone) return;
        showAdv();
        if(isSounds){
            setTimeout(()=>{
                doneLevelSound.play();
            }, 500)
        }
        if (doneLevels === level
            && !randomGame
            && !premiumGame
        ) {
            setExp(moneyAndExpPerDifficult[difficult].exp);
            setMoney(moneyAndExpPerDifficult[difficult].money);

            addMoney(moneyAndExpPerDifficult[difficult].money);
            addExp(moneyAndExpPerDifficult[difficult].exp);
            if (levelsCount > level + 1) {
                addDoneLevels(game, difficult, level + 1);
            }
        }
        setGameDone(true);
        setWin(true);
    };
    const getLose = (msg) => {
        if (gameDone) return;
        showAdv();
        if(isSounds){
            setTimeout(()=>{
                loseLevelSound.play()
            }, 500);
        }
        setLoseMsg(msg);
        setLose(true);
        setGameDone(true);
    };
    const playAgain = (nextLevel) => {
        setIsGame(false);
        setLose(false);
        setWin(false);
        setPause(false);
        setGameDone(false);
        setTimeout(() => {
            if (nextLevel) chooseLevel(level + 1);
            if (randomGame) {
                level = Math.floor(Math.random() * levelsCount);
            }
            setIsGame(true);
        }, 500);


    };
    const nextLevel = () => {
        if (levelsCount > level + 1) {
            playAgain(true);
        }
    };
    const returnBack = randomGame ? '/difficult' : premiumGame ? '/gameSettings' : '/levels';
    let GameComponent;

    switch (game) {
        case 'shultz':
            GameComponent = ShultzGame;
            break;
        case 'rememberNumbers':
            GameComponent = RememberNumbersGame;
            break;
        case 'findWord':
            GameComponent = FindWordGame;
            break;
        case 'wordInText':
            GameComponent = WordInTextGame;
            break;
        case 'field':
            GameComponent = FieldGame;
            break;
        case 'runWords':
            GameComponent = RunWordsGame;
            break;
        case 'chet':
            GameComponent = ChetGame;
            break;
        case 'findLetters':
            GameComponent = FindLettersGame;
            break;
        case 'couple':
            GameComponent = CoupleGame;
            break;
        default:
            GameComponent = ShultzGame;
    }

    return (
        <div className={'gamePage'}>
            <TopMenu>
                <div className="playAgain" onClick={() => {
                    setIsGame(false);
                    setPause(false);
                    setTimeout(() => {
                        setIsGame(true);
                    }, 500)

                }}/>
                {gameName}

                <div className="pause" onClick={() => {
                    setPause(!pause);
                }}/>
            </TopMenu>
            {isGame ? <GameComponent
                getWin={getWin}
                getLose={getLose}
                levelInfo={levelInfo}
                difficult={difficult}
                gameDone={gameDone}
                pause={pause}
            /> : ''}
            <SwitchTransition>
                <CSSTransition
                    key={isWin || isLose}
                    addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
                    classNames='fade-game'
                >
                    {isWin ? <GameDone level={level}
                                       exp={exp}
                                       withoutPrizes={randomGame || premiumGame}
                                       money={money}
                                       allMoney={allMoney}
                                       playAgain={() => playAgain(false)}
                                       nextLevel={nextLevel}
                                       showNextLevel={levelsCount > level + 1}

                    /> : isLose ? <GameDoneLose
                        msg={loseMsg}
                        allMoney={allMoney}
                        playAgain={() => playAgain(false)}
                    /> : <div/>}
                </CSSTransition>
            </SwitchTransition>

            <ReturnBack to={returnBack} onClick={() => {
                setGameDone(true)
            }}/>

            {
                pause ?
                    <div className={'pause-block'} onClick={() => setPause(false)}>
                        Нажмите, чтобы продолжить игру
                    </div>

                    : ''
            }
        </div>
    );
}

export default connect((store) => ({
        game: selectGame(store),
        gameName: selectGameName(store),
        difficult: selectDifficult(store),
        level: selectGameLevel(store),
        randomGame: selectRandGame(store),
        allMoney: selectMoney(store),
        doneLevels: selectGameProgressByDifficult(store),
        premiumGame: selectPremiumGame(store),
        premiumLevelInfo: selectLevelInfo(store),
        isSounds: selectSounds(store)
    }),
    (dispatch) => ({
        chooseLevel: (level) => dispatch(chooseLevel(level)),
        addMoney: (money) => dispatch(addMoney(money)),
        showAdv: () => dispatch(showAdv()),
        addExp: (exp) => dispatch(addExp(exp)),
        addDoneLevels: (game, difficult, doneLevels) => dispatch(addDoneLevels(game, difficult, doneLevels))
    })
)(GamePage);
