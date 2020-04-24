import React from 'react';
import './closeDifficultLevel.scss'
import popUpBlackout from "../../../decorators/pop-up-blackout/PopUpBlackout";

function CloseDifficultLevel(props) {
    const {onClick} = props;
    return (
        <div className={'close-game close-game_diff'}>
            <div className={'close-game__header'}>
                <h3>Уровни закрыты</h3>
                <div className="close-game__close" onClick={onClick}/>
            </div>
            <p>Откройте уровень за 200 монет</p>
            <div className="menu-game__icon menu-game__icon-diff">
                4
            </div>
            <div className="close-game__name">Эксперт</div>
            <div className="buyGame">
                Открыть 200
                <div className={'money-img'} />
            </div>
        </div>
    );
}

export default popUpBlackout(CloseDifficultLevel);
