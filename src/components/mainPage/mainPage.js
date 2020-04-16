import React from 'react';
import './mainPage.scss'
import {connect} from "react-redux";
import PlayerLevel from "../playerLevel/playerLevel";
import Premium from "../premium/premium";
import Money from "../money/money";
import TopMenu from "../topMenu/topMenu";
import MenuGame from "../menuGame";

const gamesNames = [
    ['Таблица Шульте', 'shultz'],
    ['Запомни слова', 'rememberWords'],
    ['Найди слово', 'findWord'],
    ['Запомни числа','rememberNumbers'],
    ['Поле зрения', 'field'],
    ['Бегущие слова', 'runWords'],
    ['Чётные числа', 'chet'],
    ['Поиск букв', 'findLetters'],
    ['Слово в тексте', 'wordInText'],
    ['Пары слов', 'couple']
];
function MainPage(props) {
    const {} = props;
    return (
        <div className={'mainPage'}>
            <TopMenu>
                <PlayerLevel />
                <Premium/>
                <Money/>
            </TopMenu>
            <div className="trainers">Упражнения</div>
            {gamesNames.map((arr)=>
                <MenuGame name={arr[0]} gameClass={arr[1]}/>
            )
            }
        </div>
    );
}

export default connect((store) => ({


    })
)(MainPage);
