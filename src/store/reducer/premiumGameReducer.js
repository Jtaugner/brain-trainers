import {CHANGE_PREMIUM_GAME} from "../common";

export const premiumGameReducer = (state = false, action) => {
    if(action.type === CHANGE_PREMIUM_GAME){
        return action.premiumGame;
    }
    return state;
};