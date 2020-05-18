import React from 'react';
import './returnBack.scss'
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {selectSounds} from "../../store/selectors";

import {clickSound} from '../../sounds'

function ReturnBack(props) {
    const {to, onClick, isSounds} = props;
    const onClickBack = () => {
        if(onClick) onClick();
        if(isSounds) clickSound.play();

    };
    return (
        <Link to={to}>
            <div className={'return-back'} onClick={onClickBack} />
        </Link>
    );
}

export default
connect(
    (store)=>({
        isSounds: selectSounds(store)
    })
)(ReturnBack)
