import {} from "../common";
import {ADD_EXP} from "../common";

export const expReducer = (state = 20, action) => {
    if(action.type === ADD_EXP){
        return action.exp;
    }
    return state;
};