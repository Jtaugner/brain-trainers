import {CHANGE_LEVEL_INFO} from "../common";

export const levelInfoReducer = (state = null, action) => {
    if(action.type === CHANGE_LEVEL_INFO){
        return action.levelInfo;
    }
    return state;
};