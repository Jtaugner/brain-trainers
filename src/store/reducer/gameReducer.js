import {} from "../common";
import {CHOOSE_GAME} from "../common";

export const gameReducer = (state = '', action) => {
    if(action.type === CHOOSE_GAME){
        return action.game;
    }
    return state;
};