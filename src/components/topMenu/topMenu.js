import React from 'react';
import './topMenu.scss'
import {connect} from "react-redux";
function TopMenu(props) {
    return (
        <div className="top-menu">
            {props.children}
        </div>
    );
}

export default connect((store) => ({


    })
)(TopMenu);
