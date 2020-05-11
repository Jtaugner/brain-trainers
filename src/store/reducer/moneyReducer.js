import {CHANGE_MONEY_FROM_PLAYER_DATA, SUBTRACT_MONEY} from "../common";
import {ADD_MONEY} from "../common";

export const moneyReducer = (state = 150, action) => {
    if(action.type === SUBTRACT_MONEY){
        return state - action.money;
    }else if(action.type === ADD_MONEY){
        return state + action.money;
    }else if(action.type === CHANGE_MONEY_FROM_PLAYER_DATA){
        return action.money;
    }
    return state;
};