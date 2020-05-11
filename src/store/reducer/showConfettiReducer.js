import {BUY_GAME, BUY_LEVELS_DIFF, SWITCH_OFF_CONFETTI} from "../common";

export const showConfettiReducer = (state = false, action) => {
    if(action.type === BUY_GAME || action.type === BUY_LEVELS_DIFF){
        return true;
    }else if(action.type === SWITCH_OFF_CONFETTI){
        return false;
    }
    return state;
};