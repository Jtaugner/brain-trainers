import React, {useState} from 'react';
import './difficultPage.scss'
import {connect} from "react-redux";
import PlayerLevel from "../playerLevel/playerLevel";
import Premium from "../premium/premium";
import Money from "../money/money";
import TopMenu from "../topMenu/topMenu"
import {selectGame, selectGameName, selectRandGame} from "../../store/selectors";
import ReturnBack from "../returnBack/returnBack";
import DifficultLevel from "./difficultLevel/difficultLevel";
import DifficultPremiumLevel from "./difficultPremiumLevel/difficultPremiumLevel";
import {difficultNames} from "../../projectCommon";
import CloseDifficultLevel from "./closeDifficultLevel/closeDifficultLevel";
import {buyLevelsDiff, switchOffConfetti} from "../../store/ac";

const expertCosts = 150;
const difficultColors =
    [
        '#76e879',
        '#59e4e3',
        '#57b7d7',
        '#e25454'
    ];

function DifficultPage(props) {
    const {gameName, game, randomGame,
        buyLevelsDiff, switchOffConfetti} = props;
    let [popUpExpert, setPopUp] = useState(false);
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
            <DifficultPremiumLevel/>
            {difficultNames.map((obj, index)=>
                <DifficultLevel
                    key={obj.key}
                    name={obj.difficultName}
                    game={game}
                    gameClass={obj.key}
                    gameDoneColor={difficultColors[index]}
                    difficult={index}
                    randomGame={randomGame}
                    onClick={()=>{setPopUp(true)}}
                />
            )}
            {popUpExpert ? <CloseDifficultLevel
                name={'Эксперт'}
                number={4}
                money={expertCosts}
                buyLevelsDiff={()=>buyLevelsDiff(game, 3, expertCosts)}
                onClick={()=>{
                    setPopUp(false);
                    switchOffConfetti();
                }}
            />: ''}

            <ReturnBack to={'/home'}/>
        </div>
    );
}

export default connect((store, ownProps) => ({
    game: selectGame(store),
    gameName: selectGameName(store),
    randomGame: selectRandGame(store)
    }),
    (dispatch)=>({
        buyLevelsDiff: (game, level, money) => dispatch(buyLevelsDiff(game, level, money)),
        switchOffConfetti: () => dispatch(switchOffConfetti())
    })
)(DifficultPage);
