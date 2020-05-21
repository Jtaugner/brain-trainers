import React from 'react';
import './money.scss'
import {connect} from "react-redux";
import {selectMoney} from "../../store/selectors";
import {Link} from "react-router-dom";


function Money(props) {
    const {money} = props;
    return (
        <Link to={'/shop'}>
        <div className="moneyBlock">
            <div className="moneyBlock__money">
                <div className="moneyPic" />
                {money}
                <div className="addMoney">+</div>
            </div>

        </div>
        </Link>
    );
}

export default connect((store) => ({
        money: selectMoney(store),

    })
)(Money);
