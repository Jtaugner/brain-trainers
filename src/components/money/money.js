import React from 'react';
import './money.scss'
import {connect} from "react-redux";
import {selectMoney} from "../../store/selectors";
import {getExpLevel} from "../../projectCommon";
const classNames = require('classnames');
function Money(props) {
    const {money} = props;
    return (
        <div className="moneyBlock">
            <div className="moneyBlock__money">
                <div className="moneyPic" />
                {money}
                <div className="addMoney">+</div>
            </div>

        </div>
    );
}

export default connect((store) => ({
        money: selectMoney(store),

    })
)(Money);
