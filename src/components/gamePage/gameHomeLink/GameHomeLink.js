import React from 'react';
import {Link} from "react-router-dom";

function GameHomeLink() {
    return (
        <Link to={'/home'}>
            <div className="game-done__button game-done__home"/>
        </Link>
    );
}

export default GameHomeLink;
