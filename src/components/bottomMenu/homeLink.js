import React from 'react';
import {NavLink} from "react-router-dom";

function HomeLink() {
    return (
        <NavLink
            to={'/home'}
            activeClassName={'bottom-menu__active-link'}
        >
            <div className="bottom-menu__link bottom-menu__home" />

        </NavLink>
    );
}

export default HomeLink;
