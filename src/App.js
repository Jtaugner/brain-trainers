import React, {Component} from 'react';
import './root.css'
import './App.css';
import {connect} from "react-redux";
import MainPage from "./components/mainPage";
import Shop from "./components/shop";
import {Route, Switch} from "react-router-dom";
import Settings from "./components/settings";
import {selectNewLevel, selectNotEnoughMoney, selectSettings} from "./store/selectors";
import DifficultPage from "./components/difficultPage/difficultPage";
import LevelsPage from "./components/levelsPage/levelsPage";
import GamePage from "./components/gamePage/gamePage";
import NotEnoughMoneyPopUp from "./components/notEnoughMoneyPopUp/notEnoughMoneyPopUp";
import GameSettingsPage from "./components/gameSettingsPage/gameSettingsPage";
import ErrorMessage from "./components/errorMessage/errorMessage";
import NewLevelPopUp from './components/newLevelPopUp/newLevelPopUp'
import {closeNewLevel} from "./store/ac";


export function giveParams(data) {
    try{
        window.ym(63291265, 'params', data);
    }catch(ignored){}
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isError: false
        };

    }


    componentDidCatch(error, info) {
        // Послать ошибку в яндекс метрику
        const str = error.toString();
        try{
            giveParams({[str]: 1})
        }catch(ignored){}
        this.setState({
            isError: true
        })
    }

    render() {
        if (this.state.isError) {
            return (
                <>
                    <ErrorMessage
                        getHome={true}
                        onClick={
                            () => {
                                this.setState({
                                    isError: false
                                })
                            }
                        }/>
                </>
            )
        }
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

                    <Route path={'/difficult'}
                           render={() => <DifficultPage/>}
                    />
                    <Route path={'/levels'}
                           render={() => <LevelsPage/>}
                    />
                    <Route path={'/gameSettings'}
                           render={() => <GameSettingsPage/>}
                    />
                    <Route path={'/game'}
                           render={() => <GamePage/>}/>
                </Switch>
                {this.props.settings ? <Settings/> : ''}
                {this.props.notEnoughMoney ? <NotEnoughMoneyPopUp/> : ''}
                {this.props.newLevel ? <NewLevelPopUp onClick={() => {this.props.closeNewLevel()}}/> : ''}

            </>
        );
    }

}

export default connect(
    (store) =>
    ({
        settings: selectSettings(store),
        notEnoughMoney: selectNotEnoughMoney(store),
        newLevel: selectNewLevel(store)
    }),
    (dispatch) =>
        ({
            closeNewLevel: () => dispatch(closeNewLevel())
        })

)(App);
