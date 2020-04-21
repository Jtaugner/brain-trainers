import {CHOOSE_DIFFICULT} from "../common";

export const difficultReducer = (state = 0, action) => {
    if(action.type === CHOOSE_DIFFICULT){
        return action.difficult;
    }
    return state;
};