import {CHANGE_MONEY_FROM_PLAYER_DATA, getFromLocalStorage, SUBTRACT_MONEY} from "../common";
import {ADD_MONEY} from "../common";

let gameMoney = getFromLocalStorage('gameMoney', 15);


export const moneyReducer = (state = gameMoney, action) => {
    if(action.type === SUBTRACT_MONEY){
        localStorage.setItem('gameMoney', state - action.money);
        return state - action.money;
    }else if(action.type === ADD_MONEY){
        localStorage.setItem('gameMoney', state + action.money);
        return state + action.money;
    }else if(action.type === CHANGE_MONEY_FROM_PLAYER_DATA){
        return action.money;
    }
    return state;
};