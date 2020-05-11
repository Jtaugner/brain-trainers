import React from 'react';
import './root.css'
import './App.css';
import {connect} from "react-redux";
import {CSSTransition, TransitionGroup} from 'react-transition-group'
import MainPage from "./components/mainPage";
import Shop from "./components/shop";
import {Route, Switch} from "react-router-dom";
import BottomMainMenu from "./components/bottomMainMenu/bottomMenu";
import Settings from "./components/settings";
import {selectNotEnoughMoney, selectSettings} from "./store/selectors";
import DifficultPage from "./components/difficultPage/difficultPage";
import LevelsPage from "./components/levelsPage/levelsPage";
import GamePage from "./components/gamePage/gamePage";
import NotEnoughMoneyPopUp from "./components/notEnoughMoneyPopUp/notEnoughMoneyPopUp";


function App(props) {
    const {settings, ysdkGame, notEnoughMoney} = props;
    return (
            <>
            <Switch
              >
                <Route path={'/home'}
                       render={() => <MainPage/>}
                />
                <Route path={'/shop'}
                       render={() => <Shop ysdkGame={ysdkGame}/>}/>

                <Route path={'/settings'}
                       render={() => <Settings/>}/>

                <Route path={'/difficult'}
                       render={() => <DifficultPage/>}
                />
                <Route path={'/levels'}
                       render={() => <LevelsPage/>}
                />
                <Route path={'/game'}
                       render={() => <GamePage/>}/>
            </Switch>
            {settings ? <Settings/> : ''}
            {notEnoughMoney ? <NotEnoughMoneyPopUp/> : ''}
        </>
    );
}

export default connect((store)=>({
    settings: selectSettings(store),
    notEnoughMoney: selectNotEnoughMoney(store)
}))(App);
