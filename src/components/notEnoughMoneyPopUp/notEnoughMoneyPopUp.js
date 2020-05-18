import React from 'react';
import './notEnoughMoneyPopUp.scss'
import popUpBlackout from "../../decorators/pop-up-blackout/PopUpBlackout";
import {connect} from "react-redux";
import {changeNotEnoughMoney, chooseLevel} from "../../store/ac";
import {selectSounds} from "../../store/selectors";
import {notEnoughMoneySound} from '../../sounds'
function NotEnoughMoneyPopUp(props) {
    const {onClick, isSounds} = props;
    if(isSounds) notEnoughMoneySound.play();
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

export default connect((store) => ({
        isSounds: selectSounds(store)
    }),
    (dispatch)=>({
        onClick: ()=>dispatch(changeNotEnoughMoney(false))
    })

    )(popUpBlackout(NotEnoughMoneyPopUp));
