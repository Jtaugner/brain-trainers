import React from 'react';
import './returnBack.scss'
import {Link} from "react-router-dom";

function ReturnBack(props) {
    const {to} = props;
    return (
        <Link to={to}>
            <div className={'return-back'} />
        </Link>
    );
}

export default ReturnBack;
