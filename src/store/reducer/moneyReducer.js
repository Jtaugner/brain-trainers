import {SUBTRACT_MONEY} from "../common";
import {ADD_MONEY} from "../common";

export const moneyReducer = (state = 15, action) => {
    if(action.type === SUBTRACT_MONEY){
        return state - action.money;
    }else if(action.type === ADD_MONEY){
        return state + action.money;
    }
    return state;
};