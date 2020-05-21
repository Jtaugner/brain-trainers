import {ADD_EXP, CHANGE_EXP_FROM_PLAYER_DATA, getFromLocalStorage} from "../common";

let gameExp = getFromLocalStorage('gameExp', 0);

export const expReducer = (state = gameExp, action) => {
    if(action.type === ADD_EXP){
        localStorage.setItem('gameExp', action.exp);
        return action.exp;
    }else if(action.type === CHANGE_EXP_FROM_PLAYER_DATA){
        return action.exp;
    }
    return state;
};