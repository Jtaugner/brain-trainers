//Jtaugner (yotik123@yandex.ru) Copyright ©2020
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App, {giveParams} from './App';
import {Provider} from 'react-redux'
import {store} from "./store";
import {MemoryRouter} from "react-router-dom";
import {
    addMoney,
    changeExp, changeGameCatalog, changeGamePayments,
    changeGameSDK,
    changeGiftOpens,
    changeGiftTime,
    changeLevel,
    changeMoney, changePremiumTime,
    changeProgress
} from "./store/ac";
import {
    selectExp,
    selectGiftOpens,
    selectGiftTime,
    selectMoney,
    selectPlayerLevel,
    selectPremiumTime, selectProgress
} from "./store/selectors";
import {moneyPrice, premiumPrice} from "./projectCommon";

var playerGame, ysdkGame;


function getState() {
    const state = store.getState();
    return {
        exp: selectExp(state),
        giftOpens: selectGiftOpens(state),
        giftTime: selectGiftTime(state),
        level: selectPlayerLevel(state),
        money: selectMoney(state),
        premiumTime: selectPremiumTime(state),
        progress: selectProgress(state),
    }
}

export function saveData() {
    try{
        if (playerGame) {
            const state = {gameProgress: getState()};
            if(playerGame) playerGame.setData(state).then((ignored) => {}).catch(()=>{
                setTimeout(()=>{
                    playerGame.setData(state).then((ignored) => {})
                }, 60000)
            });
        }
    }catch (ignored) {}


}

function consumePurchase(purchase, payments) {
    try{
        for(let i = 0; i < moneyPrice.length; i++){
            if(moneyPrice[i].id === purchase.productID){
                store.dispatch(addMoney(moneyPrice[i].money));
                break;
            }
        }
        for(let i = 0; i < premiumPrice.length; i++){
            if(premiumPrice[i].id === purchase.productID){
                store.dispatch(changePremiumTime(premiumPrice[i].days));
                break;
            }
        }
        giveParams({[purchase.productID]: 1});
        payments.consumePurchase(purchase.purchaseToken);
        saveData();
    }catch(e){}
}

export function initPlayer(ysdk, fromShop) {
    ysdk.getPlayer().then(_player => {
        // Игрок авторизован.
        playerGame = _player;
        window.onblur = saveData;
        window.onunload= saveData;
        window.onbeforeunload = saveData;
        window.onpagehide = saveData;
        setInterval(()=>{
            saveData();
        }, 60000);
        playerGame.getData(['gameProgress'], false).then((data) => {
            const gp = data.gameProgress;
            if(gp){
                console.log(data);
                store.dispatch(changeExp(gp.exp));

                store.dispatch(changeGiftOpens(gp.giftOpens));
                store.dispatch(changeGiftTime(gp.giftTime));

                store.dispatch(changeLevel(gp.level));

                store.dispatch(changeMoney(gp.money));

                store.dispatch(changePremiumTime(gp.premiumTime));

                store.dispatch(changeProgress(gp.progress));
            }else{
                saveData();
            }
            if(!fromShop) createApp();
        }).catch((e) => {
            if(!fromShop) createApp();
        });
    }).catch((e) => {
        console.log(e);
        if(!fromShop) createApp();
    });
    ysdk.getPayments({signed: false}).then(_payments => {
        _payments.getCatalog().then(catalog => store.dispatch(changeGameCatalog(catalog)) );
        // Покупки доступны.
        store.dispatch(changeGamePayments(_payments));
        _payments.getPurchases().then(purchases => purchases.forEach((id)=>{
            consumePurchase(id, _payments);
        }));
    }).catch(err => {
        console.log(err);
    });
}

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

if (window.YaGames) {
    window.YaGames.init()
        .then(ysdk => {
            store.dispatch(changeGameSDK(ysdk));
            var isNativeCache = ysdk.yandexApp && ysdk.yandexApp.enabled;
            if ('serviceWorker' in navigator && !isNativeCache) {
                window.onload = function () {
                    navigator.serviceWorker
                        .register('sw.js')
                        .then(function (reg) {
                            console.log('Registration succeeded. Scope is ' + reg.scope);
                        })
                        .catch(function (error) {
                            console.error('Trouble with sw: ', error);
                        });
                };
            }
            ysdkGame = ysdk;
            initPlayer(ysdk, false);
        });
} else {
    createApp();
}

