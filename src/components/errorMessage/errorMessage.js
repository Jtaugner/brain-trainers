import React from 'react';
import './errorMessage.scss'
import popUpBlackout from "../../decorators/pop-up-blackout/PopUpBlackout";
import {Link} from "react-router-dom";

function ErrorMessage(props) {
    const {onClick} = props;
    return (
        <Link to={'/home'}>
            <div className={'close-game error-message'}>
                <div className={'close-game__header'}>
                    <h3>Произошла ошибка</h3>
                    <div className="close-game__close" onClick={() => onClick()}/>
                </div>
                <p>Извините, произошла неизвестная ошибка.
                    Отчёт об ошибке уже отправлен разработчикам, скоро она будет исправлена.</p>
            </div>
        </Link>
    );
}

export default popUpBlackout(ErrorMessage);
