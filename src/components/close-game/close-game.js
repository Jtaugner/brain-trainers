import React from 'react';
import './close-game.scss'
import {connect} from "react-redux";
import popUpBlackout from "../../decorators/pop-up-blackout/PopUpBlackout";

function CloseGame(props) {
    const {gameClass, money, level, onClick} = props;
    return (
        <div className={'close-game ' + gameClass}>
            <div className={'close-game__header'}>
                <h3>Режим закрыт</h3>
                <div className="close-game__close" onClick={()=>onClick()}/>
            </div>
            <p>Чтобы разблокировать режим, достигнете {level} уровня и купите его за {money} монет.</p>
            <div className="menu-game__icon"/>
            <div className="buyGame">
                Открыть {money}
                <div className={'money-img'} />
            </div>
        </div>
    );
}

export default connect()(popUpBlackout(CloseGame));
