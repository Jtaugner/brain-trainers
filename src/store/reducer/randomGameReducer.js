import {CHANGE_RAND_GAME} from "../common";

export const randomGameReducer = (state = false, action) => {
    if(action.type === CHANGE_RAND_GAME){
        return action.isRandGame;
    }
    return state;
};