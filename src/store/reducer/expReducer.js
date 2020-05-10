import {ADD_EXP, CHANGE_EXP_FROM_PLAYER_DATA} from "../common";

export const expReducer = (state = 20, action) => {
    if(action.type === ADD_EXP){
        return action.exp;
    }else if(action.type === CHANGE_EXP_FROM_PLAYER_DATA){
        return action.exp;
    }
    return state;
};