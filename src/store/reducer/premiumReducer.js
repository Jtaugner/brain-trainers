import {SET_PREMIUM} from "../common";

export const premiumReducer = (state = true, action) => {
    if(action.type === SET_PREMIUM){
        return action.isPremium
    }
    return state;
};