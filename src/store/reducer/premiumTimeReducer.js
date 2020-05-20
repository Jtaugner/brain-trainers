import {CHANGE_PREMIUM_TIME} from "../common";

export const premiumTimeReducer = (state = 9999999999999, action) => {
    if(action.type === CHANGE_PREMIUM_TIME){
        return action.time;
    }
    return state;
};