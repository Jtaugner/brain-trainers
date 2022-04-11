import {CHANGE_PREMIUM_TIME, getFromLocalStorage, setToLocalStorage} from "../common";


let time = getFromLocalStorage('premiumTime', 0);

export const premiumTimeReducer = (state = time, action) => {
    if(action.type === CHANGE_PREMIUM_TIME){
        setToLocalStorage('premiumTime', action.time)
        return action.time;
    }
    return state;
};