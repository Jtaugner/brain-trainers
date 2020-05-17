import {SET_PREMIUM} from "../common";

export const premiumReducer = (state = false, action) => {
    if(action.type === SET_PREMIUM){
        return action.isPremium
    }
    return state;
};