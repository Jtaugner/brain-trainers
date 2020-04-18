import React from 'react';
import './bottomMenu.scss'

function BottomMenu(props) {
    return (
        <div className="bottom-menu">
            {props.children}
        </div>
    );
}

export default BottomMenu;
