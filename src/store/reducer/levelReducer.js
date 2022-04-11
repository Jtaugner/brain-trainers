import {CHANGE_LEVEL_FROM_PLAYER_DATA, GET_NEW_LEVEL, getFromLocalStorage, setToLocalStorage} from "../common";


let gameLevel = getFromLocalStorage('gameLevel', 0);

export const levelReducer = (state = gameLevel, action) => {
    if(action.type === GET_NEW_LEVEL){
        setToLocalStorage('gameLevel', state +1)
        return state + 1;
    }else if(action.type === CHANGE_LEVEL_FROM_PLAYER_DATA){
        return action.level;
    }
    return state;
};