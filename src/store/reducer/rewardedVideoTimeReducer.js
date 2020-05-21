import {CHANGE_REWARDED_TIME } from "../common";


export const rewardedVideoTimeReducer = (state = true, action) => {
    if(action.type === CHANGE_REWARDED_TIME){
        return action.isTime;
    }
    return state;
};