import React from 'react';
import {NavLink} from "react-router-dom";

function CartLink() {
    return (
        <NavLink
            to={'/shop'}
            activeClassName={'bottom-menu__active-link'}
        >
            <div className="bottom-menu__link bottom-menu__shop" />

        </NavLink>
    );
}

export default CartLink;
