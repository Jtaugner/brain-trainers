import React from 'react';
import './premiumInfo.scss'
import popUpBlackout from "../../decorators/pop-up-blackout/PopUpBlackout";

import {Link} from "react-router-dom";

function PremiumInfo(props) {
    const {
        onClick,
    } = props;
    return (
    <div className={'close-game premium-info'}>
        <div className={'close-game__header'}>
            <h3>Премиум</h3>
            <div className="close-game__close" onClick={() => onClick()}/>
        </div>
        <p>Премиум позволит вам создавать игры по своим правилам!
            Вы сможете настроить уровень под себя, изменяя любые настройки.</p>
        <Link to={'/shop'}>
            <div className="buyGame">
                Купить
            </div>
        </Link>

    </div>


    );
}

export default popUpBlackout(PremiumInfo);
