import React from 'react';
import {NavLink} from "react-router-dom";

function SettingsLink() {
    return (
        <NavLink
            to={'/settings'}
            activeClassName={'bottom-menu__active-link'}
        >
            <div className="bottom-menu__link bottom-menu__settings" />

        </NavLink>
    );
}

export default SettingsLink;
