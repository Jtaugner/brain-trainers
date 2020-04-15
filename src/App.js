import React from 'react';
import './root.css'
import './App.css';
import {connect} from "react-redux";
import {SwitchTransition,CSSTransition} from "react-transition-group";
import PlayerLevel from "./components/playerLevel";

function App(props) {

    return (
        <>
        <PlayerLevel />
            </>
    );
}

export default connect()(App);
