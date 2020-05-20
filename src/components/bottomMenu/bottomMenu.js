import React from 'react';
import './bottomMenu.scss'

function BottomMenu(props) {
    return (
        <div className="bottom-menu">
            <div className="bottom-menu__inner">
                {props.children}
            </div>

        </div>
    );
}

export default BottomMenu;
