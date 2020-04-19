import React from 'react';
import './closePopUp.scss'
import {connect} from "react-redux";
import popUpBlackout from "../../decorators/pop-up-blackout/PopUpBlackout";

function ClosePopUp(props) {
    const {gameClass, name, money, parText, headerText, onClick, nameColor} = props;
    return (
        <div className={'close-game ' + gameClass}>
            <div className={'close-game__header'}>
                <h3>{headerText}</h3>
                <div className="close-game__close" onClick={()=>onClick()}/>
            </div>
            <p>{parText}</p>
            <div className="menu-game__icon"/>
            <div className="close-game__name" style={{color: nameColor}}>{name}</div>
            <div className="buyGame">
                Открыть {money}
                <div className={'money-img'} />
            </div>
        </div>
    );
}

export default connect()(popUpBlackout(ClosePopUp));
