import React, {useState} from 'react';
import './gameSettingsPage.scss'
import {connect} from "react-redux";
import TopMenu from "../topMenu/topMenu"
import {
    selectGame,
    selectGameName, selectLevelInfo,
} from "../../store/selectors";
import ReturnBack from "../returnBack/returnBack";
import {getRandText} from "../../gamesCommon";
import {changeLevelInfo, changePremiumGame} from "../../store/ac";
import {Link} from "react-router-dom";

const gameSettings = {
    "shultz": ["width", "sec"],
    "rememberNumbers": ["size", "time", "rounds"],
    "findWord": ["rowsLength", "wordsAmount", "rounds", "sec"],
    "wordInText": ["text", "rounds", "sec"],
    "field": ["rounds", "mistakes", "time", "rows", "cols"],
    "runWords": ["amount", "time", "rounds"],
    "chet": ["rounds", "smallRows", "amount", "numberLength", "sec"],
    "findLetters": ["rounds", "rows", "amount", "sec"],
    "couple": ["rounds", "smallRows", "amount", "sec"]
};
const settings = {
    "width": {name: 'Размер поля', min: 3, max: 10, val: 5},
    "sec": {name: 'Время (сек)', min: 3, max: 1200, val: 30},
    "size": {name: 'Длина числа', min: 3, max: 9, val: 5},
    "time": {name: 'Время на показ (мс)', min: 100, max: 10000, val: 1000},
    "rounds": {name: 'Раунды', min: 1, max: 50, val: 5},
    "rowsLength": {name: 'Высота поля', min: 5, max: 7, val: 6},
    "wordsAmount": {name: 'Кол-во слов', min: 3, max: 5, val: 4},
    "text": {val: getRandText()},
    "mistakes": {name: 'Кол-во ошибок', min: 2, max: 20, val: 5},
    "rows": {name: 'Количество строк', min: 3, max: 11, val: 6},
    "cols": {name: 'Количество столбцов', min: 3, max: 11, val: 6},
    "numberLength": {name: 'Длина чисел', min: 2, max: 8, val: 5},
    "smallRows": {name: 'Количество строк', min: 3, max: 9, val: 6},
    "amount": {
        name: {
            'runWords': 'Кол-во слов',
            'chet': 'Кол-во чётных чисел',
            'findLetters': 'Кол-во букв для поиска',
            'couple': 'Кол-во пар для поиска'
        },
        min: 1,
        max: {
            'runWords': 30,
            'chet': 12,
            'findLetters': 12,
            'couple': 12
        },
        val: 6
    }
};

function GameSettingsPage(props) {
    const {gameName, game, changePremiumLevelInfo,
        premiumLevelInfo} = props;
    let object = {};
    if(premiumLevelInfo){
        object = premiumLevelInfo;
    }else{
        gameSettings[game].forEach((setting) => {
            object[setting] = settings[setting].val;
        });
    }
    const [levelInfo, setLevelInfo] = useState(object);
    const changeLevelInfo = (e, key) => {
        const info = {...levelInfo};
        info[key] = Number(e.target.value);
        setLevelInfo(info);
    };
    const startGame = () => {
        changePremiumLevelInfo(levelInfo);
    };
    return (
        <div className={'mainPage gameSettings'}>
            <TopMenu>
                <p className={'gameSettings__name'}>Создание игры</p>
            </TopMenu>
            <div className="top-tip">
                <div className="top-tip__name">{gameName}</div>
            </div>
            <div className="gameSettings_wrapper">
                {
                    Object.keys(levelInfo).map((key) => {
                        console.log(settings[key], typeof settings[key] === "object");
                        if (key === 'text') return '';
                        return <div
                            className={'gameSettings__setting'}
                            key={key}
                        >
                            <div className="setting__additional">
                                <div className="setting__additional__name">
                                    {
                                        typeof settings[key].name === "object" ?
                                            settings[key].name[game]
                                            :
                                            settings[key].name
                                    }
                                </div>
                                <div className="setting__additional__value">
                                    {
                                        levelInfo[key]
                                    }
                                </div>
                            </div>
                            <input
                                type={'range'}
                                onChange={(e) => {
                                    changeLevelInfo(e, key);
                                }}
                                className={'setting-range'}
                                min={settings[key].min}
                                max={typeof settings[key].max === "object" ?
                                    settings[key].max[game]
                                    :
                                    settings[key].max}
                                value={levelInfo[key]}
                            />

                        </div>
                    })
                }
            </div>
            <Link to={'/game'}>
                <div className="gameSettings__start" onClick={startGame}>
                    Начать
                </div>
            </Link>

            <ReturnBack to={'/difficult'}/>
        </div>
    );
}

export default connect(
    (store) => ({
        game: selectGame(store),
        gameName: selectGameName(store),
        premiumLevelInfo: selectLevelInfo(store)
    }),
    (dispatch)=>({
        changePremiumLevelInfo: (info) => {
            dispatch(changeLevelInfo(info))
        }
    })
)(GameSettingsPage);
