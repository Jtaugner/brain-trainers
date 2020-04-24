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
import DifficultPremiumLevel from "./difficultPremiumLevel/difficultPremiumLevel";
import {difficultNames} from "../../projectCommon";
import CloseDifficultLevel from "./closeDifficultLevel/closeDifficultLevel";

function DifficultPage(props) {
    const {gameName, game} = props;
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
                    difficult={index}
                    onClick={()=>{setPopUp(true)}}
                />
            )}
            {popUpExpert ? <CloseDifficultLevel onClick={()=>{setPopUp(false)}}/>: ''}

            <ReturnBack to={'/home'}/>
        </div>
    );
}

export default connect((store, ownProps) => ({
    game: selectGame(store),
    gameName: selectGameName(store),
    })
)(DifficultPage);
