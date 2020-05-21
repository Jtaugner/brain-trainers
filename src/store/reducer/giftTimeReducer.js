import {CHANGE_GIFT_TIME, getFromLocalStorage} from "../common";
import {giftTimes} from "../../projectCommon";

let time = getFromLocalStorage('giftTime', (+new Date()) + giftTimes[0]);

export const giftTimeReducer = (state = time, action) => {
    if(action.type === CHANGE_GIFT_TIME){
        localStorage.setItem('giftTime', action.time);
        return action.time;
    }
    return state;
};