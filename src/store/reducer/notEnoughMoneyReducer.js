import {CHANGE_NOT_ENOUGH_MONEY} from "../common";

export const notEnoughMoneyReducer = (state = 0, action) => {
    if(action.type === CHANGE_NOT_ENOUGH_MONEY){
        return action.show;
    }
    return state;
};