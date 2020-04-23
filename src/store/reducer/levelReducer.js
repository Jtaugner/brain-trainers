import {} from "../common";
import {GET_NEW_LEVEL} from "../common";

export const levelReducer = (state = 0, action) => {
    if(action.type === GET_NEW_LEVEL){
        return state + 1;
    }
    return state;
};