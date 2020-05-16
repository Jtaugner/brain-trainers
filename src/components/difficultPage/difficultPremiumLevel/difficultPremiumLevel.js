import React from 'react';
import './difficultPremiumLevel.scss'
import {Link} from "react-router-dom";
import {selectPremium} from "../../../store/selectors";
import {connect} from "react-redux";
import {changeLevelInfo, changePremiumGame} from "../../../store/ac";

function DifficultPremiumLevel(props) {
    const {isPremium, switchOffPremiumGame, changePremiumLevelInfo} = props;
    const openSettings = () => {
        changePremiumLevelInfo();
        switchOffPremiumGame();
    };
    const Component = <div className={'menu-game premium-game'}>
                        <div
                            className={'menu-game__icon'}/>
                        <div className="menu-game__additional">
                            <div className="game-name">Для Premium</div>
                            <div className="game-desc">Создай свою игру</div>
                        </div>
                    </div>;
    if (isPremium) {
        return (
            <Link to={'/gameSettings'} onClick={openSettings}>
                {Component}
            </Link>
        );
    }
    return Component;
}

export default connect(
    (store) => ({
        isPremium: selectPremium(store)
    }),
    (dispatch)=>({
        switchOffPremiumGame: ()=>{
            dispatch(changePremiumGame(true))
        },
        changePremiumLevelInfo: () => {
            dispatch(changeLevelInfo(null))
        }
    })
)(DifficultPremiumLevel);
