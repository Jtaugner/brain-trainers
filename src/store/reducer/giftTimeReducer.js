import {CHANGE_GIFT_TIME} from "../common";
import {giftTimes} from "../../projectCommon";

const time = (+new Date()) + giftTimes[0];
export const giftTimeReducer = (state = time, action) => {
    if(action.type === CHANGE_GIFT_TIME){
        return action.time;
    }
    return state;
};