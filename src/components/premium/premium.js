import React from 'react';
import './premium.scss'
import {connect} from "react-redux";
import {selectPremium} from "../../store/selectors";
function Premium(props) {
    const {isPremium} = props;
    return (
        <>
        {isPremium ? <div className="premium" /> : <></>}
        </>
    );
}

export default connect((store) => ({
        isPremium: selectPremium(store)

    })
)(Premium);
