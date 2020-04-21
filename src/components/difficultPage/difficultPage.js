import React, {useState} from 'react';
import './difficultPage.scss'
import {connect} from "react-redux";
import PlayerLevel from "../playerLevel/playerLevel";
import Premium from "../premium/premium";
import Money from "../money/money";
import TopMenu from "../topMenu/topMenu"
import {selectGame, selectGameName} from "../../store/selectors";
import ReturnBack from "../returnBack/returnBack";
import DifficultLevel from "./difficultLevel/difficultLevel";

const difficultNames = {
    'easy':'Легко',
    'medium': 'Средне',
    'hard': 'Сложно',
    'expert': 'Эксперт'};
let indexGame = 0;
let gamesClosedNames = [];
function DifficultPage(props) {
    const {gameName, game} = props;
    return (
        <div className={'mainPage difficultPage'}>
            <TopMenu>
                <PlayerLevel/>
                <Premium/>
                <Money/>
            </TopMenu>
            <div className="top-tip">
                <div className="top-tip__name">{gameName}</div>
            </div>
            {Object.keys(difficultNames).map((key, index)=>
                <DifficultLevel
                    key={key}
                    name={difficultNames[key]}
                    game={game}
                    gameClass={key}
                    difficult={index}
                    di
                />
            )}

            <ReturnBack to={'/home'}/>
        </div>
    );
}

export default connect((store, ownProps) => ({
    game: selectGame(store),
    gameName: selectGameName(store),
    })
)(DifficultPage);
