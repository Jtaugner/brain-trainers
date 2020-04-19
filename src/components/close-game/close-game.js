import React from 'react';
import {connect} from "react-redux";
import popUpBlackout from "../../decorators/pop-up-blackout/PopUpBlackout";
import ClosePopUp from "../closePopUp/closePopUp";

function CloseGame(props) {
    const {money, level} = props;
    return (
        <ClosePopUp
            {...props}
            parText={`Чтобы разблокировать режим, достигнете ${level} уровня и купите его за ${money} монет.`}
            headerText={'Режим закрыт'}
            nameColor={'#3f3f3f'}
        />
    );
}

export default connect()(popUpBlackout(CloseGame));
