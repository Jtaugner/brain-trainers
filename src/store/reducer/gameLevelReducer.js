import {} from "../common";
import {CHOOSE_LEVEL} from "../common";

export const gameLevelReducer = (state = 0, action) => {
    if(action.type === CHOOSE_LEVEL){
        return action.level;
    }
    return state;
};
