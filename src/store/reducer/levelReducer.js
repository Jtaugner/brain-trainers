import {} from "../common";
import {GET_NEW_LEVEL} from "../common";
import {CHANGE_LEVEL_FROM_PLAYER_DATA} from "../common";

export const levelReducer = (state = 0, action) => {
    if(action.type === GET_NEW_LEVEL){
        return state + 1;
    }else if(action.type === CHANGE_LEVEL_FROM_PLAYER_DATA){
        return action.level;
    }
    return state;
};