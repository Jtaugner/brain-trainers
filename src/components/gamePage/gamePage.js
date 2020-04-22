import React, {useState} from 'react';
import './gamePage.scss'
import {connect} from "react-redux";
import TopMenu from "../topMenu/topMenu"
import {selectGame, selectGameName} from "../../store/selectors";
import ReturnBack from "../returnBack/returnBack";

let indexGame = 0;
let gamesClosedNames = [];
function GamePage(props) {
    const {gameName, game} = props;
    return (
        <div className={'gamePage'}>
            <TopMenu>
                {gameName}
                <div className="playAgain" />
            </TopMenu>



            <ReturnBack to={'/levels'}/>
        </div>
    );
}

export default connect((store, ownProps) => ({
    game: selectGame(store),
    gameName: selectGameName(store),
    })
)(GamePage);
