import React, {useState} from 'react';
import './levelsPage.scss'
import {connect} from "react-redux";
import PlayerLevel from "../playerLevel/playerLevel";
import Premium from "../premium/premium";
import Money from "../money/money";
import TopMenu from "../topMenu/topMenu";

import {selectDifficult, selectDifficultName, selectGame, selectGameProgressByDifficult} from "../../store/selectors";
import ReturnBack from "../returnBack/returnBack";
import {getLevelsAmountByGameAndDiff} from "../../gamesCommon";
import Level from "./level/level";

let indexGame = 0;
let gamesClosedName = [];

function LevelsPage(props) {
    const {diffName, game, difficult, doneLevels} = props;
    console.log(diffName);
    let levelsCount = getLevelsAmountByGameAndDiff(game, difficult);
    const [gameClosed, changeGameClosed] = useState(false);
    const levels = [];
    for (let i = 0; i < levelsCount; i++) {
        levels.push(<Level
            closedLevel={doneLevels < i}
            newLevel={doneLevels === i}
            key={'level' + i}
            level={i}/>)
    }
    return (
        <div className={'mainPage levelsPage'}>
            <TopMenu>
                <PlayerLevel/>
                <Premium/>
                <Money/>
            </TopMenu>
            <div className="top-tip">
                <div className="top-tip__name">{diffName}</div>
            </div>

            <div className="levels">
                {
                    levels
                }
            </div>

            <ReturnBack to={'/difficult'}/>
        </div>
    );
}

export default connect((store, ownProps) => ({
        diffName: selectDifficultName(store),
        doneLevels: selectGameProgressByDifficult(store),
        game: selectGame(store),
        difficult: selectDifficult(store)
    })
)(LevelsPage);
