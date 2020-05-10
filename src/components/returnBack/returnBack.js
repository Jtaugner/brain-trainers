import React from 'react';
import './returnBack.scss'
import {Link} from "react-router-dom";

function ReturnBack(props) {
    const {to, onClick} = props;
    return (
        <Link to={to}>
            <div className={'return-back'} onClick={onClick} />
        </Link>
    );
}

export default ReturnBack;
