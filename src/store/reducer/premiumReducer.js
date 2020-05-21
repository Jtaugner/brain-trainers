import {getFromLocalStorage, SET_PREMIUM} from "../common";

let time = getFromLocalStorage('premiumTime', 0);
let isPremium = false;
if((+new Date()) < time ) isPremium = true;

export const premiumReducer = (state = isPremium, action) => {
    if(action.type === SET_PREMIUM){
        return action.isPremium
    }
    return state;
};