import React from 'react';
import './root.css'
import './App.css';
import {connect} from "react-redux";
import {CSSTransition, TransitionGroup} from 'react-transition-group'
import MainPage from "./components/mainPage";
import Shop from "./components/shop";
import {Route, Switch} from "react-router-dom";
import BottomMainMenu from "./components/bottomMainMenu/bottomMenu";



function App(props) {

    return (
        <>
            <Switch
              >
                <Route path={'/home'}
                       render={() => <MainPage/>}
                       exact
                       strict
                />
                <Route path={'/shop'}
                       render={() => <Shop/>}/>
            </Switch>
            <BottomMainMenu />
        </>
    );
}

export default connect()(App);
