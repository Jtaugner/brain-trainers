import React from 'react';
import './shop.scss'
import {connect} from "react-redux";
import BottomMainMenu from "../bottomMainMenu/bottomMenu";

function Shop(props) {
    return (
        <div className="shop">
            Магазин
        </div>

    );
}

export default connect()(Shop);
