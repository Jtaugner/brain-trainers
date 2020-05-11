import React from 'react';
import './notEnoughMoneyPopUp.scss'
import popUpBlackout from "../../decorators/pop-up-blackout/PopUpBlackout";
import {connect} from "react-redux";
import {changeNotEnoughMoney} from "../../store/ac";

function NotEnoughMoneyPopUp(props) {
    const {onClick} = props;
    return (
        <div className={'close-game not-enough-money'}>
            <div className={'close-game__header'}>
                <h3>Не хватает монет :(</h3>
                <div className="close-game__close" onClick={() => onClick()}/>
            </div>
            <p>Вам не хватает монет. Чтобы заработать больше,
                проходите уровни, получайте ежедневные награды или покупайте их.</p>
        </div>
    );
}

export default connect(null,
    (dispatch)=>({
        onClick: ()=>dispatch(changeNotEnoughMoney(false))
    })

    )(popUpBlackout(NotEnoughMoneyPopUp));
