import React, {useState} from 'react';
import './levelsPage.scss'
import {connect} from "react-redux";
import PlayerLevel from "../playerLevel/playerLevel";
import Premium from "../premium/premium";
import Money from "../money/money";
import TopMenu from "../topMenu/topMenu";

import {
    selectDifficult,
    selectDifficultName,
    selectGame,
    selectGameName,
    selectGameProgressByDifficult,
    selectGameProgressWithoutGame
} from "../../store/selectors";
import ReturnBack from "../returnBack/returnBack";
import {getLevelsAmountByGameAndDiff} from "../../gamesCommon";
import Level from "./level/level";
import Rules from "../rules/rules";
import {getRules} from "../../projectCommon";


function LevelsPage(props) {
    const {gameName, diffName, game, difficult, doneLevels, progress} = props;
    let levelsCount = getLevelsAmountByGameAndDiff(game, difficult);
    const levels = [];
    for (let i = 0; i < levelsCount; i++) {
        levels.push(<Level
            closedLevel={doneLevels < i}
            newLevel={doneLevels === i}
            key={'level' + i}
            level={i}/>)
    }
    let allDoneLevels = progress.doneLevels.reduce((acc, e)=>acc+e, 0);
    let [isRules, showRules] = useState(allDoneLevels === 0);
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
            <div className="top-tip__open-rules"
                 onClick={()=>showRules(true)}
            >?</div>
            {
                isRules ? <Rules
                    gameName={gameName}
                    onClick={()=>showRules(false)}
                >
                    {getRules(game)}
                </Rules> : ''
            }
        </div>
    );
}

export default connect((store, ownProps) => ({
        diffName: selectDifficultName(store),
        doneLevels: selectGameProgressByDifficult(store),
        game: selectGame(store),
        gameName: selectGameName(store),
        difficult: selectDifficult(store),
        progress: selectGameProgressWithoutGame(store)
    })
)(LevelsPage);
