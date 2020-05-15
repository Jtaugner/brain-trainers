import React from 'react';
import './gameSettingsPage.scss'
import {connect} from "react-redux";
import TopMenu from "../topMenu/topMenu"
import {
    selectGameName,
} from "../../store/selectors";
import ReturnBack from "../returnBack/returnBack";
import {getRandText} from "../../gamesCommon";
const gameSettings = {
    "shultz":["width","sec"],
    "rememberNumbers":["size","time","rounds"],
    "findWord":["rowsLength","wordsAmount","rounds","sec"],
    "wordInText":["text","rounds","sec"],
    "field":["rounds","mistakes","time","rows","cols"],
    "runWords":["amount","time","rounds"],
    "chet":["rounds","smallRows","amount","numberLength","sec"],
    "findLetters":["rounds","rows","amount","sec"],
    "couple":["rounds","smallRows","amount","sec"]
};
const settings = {
    "width" : {
        name: 'Размер поля',
        min: 3,
        max: 10,
        val: 5
    },
    "sec" : {
        name: 'Время (сек)',
        min: 3,
        max: 1200,
        val: 30
    },
    "size" : {
        name: 'Длина числа',
        min: 3,
        max: 9,
        val: 5
    },
    "time" : {
        name: 'Время на показ (мс)',
        min: 100,
        max: 10000,
        val: 1000
    },
    "rounds" : {
        name: 'Раунды',
        min: 1,
        max: 30,
        val: 5
    },
    "rowsLength" : {
        name: 'Высота поля',
        min: 5,
        max: 7,
        val: 6
    },
    "wordsAmount": {
        name: 'Кол-во слов',
        min: 3,
        max: 5,
        val: 4
    },
    "text": () => {
        return getRandText();
    },
    "mistakes": {
        name: 'Кол-во ошибок',
        min: 2,
        max: 20,
        val: 5
    },
    "rows" : {
        name: 'Количество строк',
        min: 3,
        max: 11,
        val: 6
    },
    "cols" : {
        name: 'Количество столбцов',
        min: 3,
        max: 11,
        val: 6
    },
    "numberLength" : {
        name: 'Длина чисел',
        min: 2,
        max: 8,
        val: 5
    },
    "smallRows" : {
        name: 'Количество строк',
        min: 3,
        max: 9,
        val: 6
    },
    "amount": {
        name: {
            'runWords' : 'Кол-во слов',
            'chet': 'Кол-во чётных чисел',
            'findLetters': 'Кол-во букв',
            'couple': 'Кол-во пар'
        },
        min: 3,
        max: 9,
        val: 6
    }
};
function GameSettingsPage(props) {
    const {gameName} = props;

    return (
        <div className={'mainPage gameSettings'} >
            <TopMenu>
                <p className={'gameSettings__name'}>Создание игры</p>
            </TopMenu>
            <div className="top-tip">
                <div className="top-tip__name">{gameName}</div>
            </div>
            <ReturnBack to={'/difficult'}/>
        </div>
    );
}

export default connect((store) => ({
    gameName: selectGameName(store)
})
)(GameSettingsPage);
