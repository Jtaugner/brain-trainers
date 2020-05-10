import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import {store} from "./store";
import {MemoryRouter} from "react-router-dom";
var playerGame, payments, ysdkGame;
function createApp() {
    ReactDOM.render(
        <Provider store={store}>
            <MemoryRouter
                initialEntries={['/home']}
                initialIndex={0}
            >
                <App
                    ysdkGame={ysdkGame}
                />
            </MemoryRouter>
        </Provider>

        ,
        document.getElementById('root')
    );
}
if(window.YaGames) {
    function initPlayer(ysdk) {
        ysdk.getPlayer().then(_player => {
            // Игрок авторизован.
            playerGame = _player;
            let promiseDone = false;
            function testCreateApp(){
                if(promiseDone){
                    createApp();
                }
                promiseDone = true;
            }
            playerGame.getData(['d'], false).then((dataObject) => {
                testCreateApp();
            }).catch((e) => {
                testCreateApp();
            });
            playerGame.getStats(['a'], false).then((dataObject) => {
                testCreateApp();
            }).catch((e) => {
                testCreateApp();
            });
            ysdk.getPayments({ signed: false }).then(_payments => {
                // Покупки доступны.
                payments = _payments;
            }).catch(err => {
                console.log(err);
            });
        }).catch((e) => {
            console.log(e);
            createApp();
        });
    }
    window.YaGames.init()
        .then(ysdk => {
            var isNativeCache = ysdk.yandexApp && ysdk.yandexApp.enabled;
            if ('serviceWorker' in navigator && !isNativeCache) {
                window.onload = function(){
                    navigator.serviceWorker
                        .register('sw.js')
                        .then(function(reg) {
                            console.log('Registration succeeded. Scope is ' + reg.scope);
                        })
                        .catch(function(error) {
                            console.error('Trouble with sw: ', error);
                        });
                };
            }
            ysdkGame = ysdk;
            initPlayer(ysdk);
        });
}else{
    createApp();
}

