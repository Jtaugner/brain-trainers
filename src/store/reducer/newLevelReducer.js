import {CLOSE_NEW_LEVEL, GET_NEW_LEVEL} from "../common";

export const newLevelReducer = (state = false, action) => {
    if(action.type === CLOSE_NEW_LEVEL){
        console.log(action);
        return false;
    }else if(action.type === GET_NEW_LEVEL){
        console.log('true');
        return true;
    }
    return state;
};