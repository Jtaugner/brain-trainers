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
import {selectSettings} from "./store/selectors";


function App(props) {
    const {settings} = props;
    return (
        <>
            <Switch
              >
                <Route path={'/home'}
                       render={() => <MainPage/>}
                />
                <Route path={'/shop'}
                       render={() => <Shop/>}/>

                <Route path={'/settings'}
                       render={() => <Settings/>}/>
            </Switch>
            <BottomMainMenu />
            {settings ? <Settings/> : ''}
        </>
    );
}

export default connect((store)=>({
    settings: selectSettings(store)
}))(App);
