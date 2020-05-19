import {ADD_OPEN_GIFT} from "../common";
import {giftTimes} from "../../projectCommon";

export const giftOpensReducer = (state = 0, action) => {
    if(action.type === ADD_OPEN_GIFT){
        if(state === giftTimes.length-1){
            return state;
        }
        return state + 1;
    }
    return state;
};