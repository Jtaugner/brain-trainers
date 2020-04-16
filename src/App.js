import React from 'react';
import './root.css'
import './App.css';
import {connect} from "react-redux";
import {SwitchTransition,CSSTransition} from "react-transition-group";
import MainPage from "./components/mainPage";

function App(props) {

    return (
        <>
            <MainPage />



            </>
    );
}

export default connect()(App);
