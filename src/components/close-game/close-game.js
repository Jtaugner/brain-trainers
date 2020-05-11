import React from 'react';
import {connect} from "react-redux";
import popUpBlackout from "../../decorators/pop-up-blackout/PopUpBlackout";
import ClosePopUp from "../closePopUp/closePopUp";

function CloseGame(props) {
    const {money} = props;
    return (
        <ClosePopUp
            {...props}
            parText={`Чтобы разблокировать режим, купите его за ${money} монет.`}
            headerText={'Режим закрыт'}
            openedParText={'Поздравляем! Вы открыли новый режим!'}
            openedHeaderText={'Режим открыт!'}
            nameColor={'#3f3f3f'}
        />
    );
}

export default connect()(popUpBlackout(CloseGame));
