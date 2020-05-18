import {TOGGLE_SOUNDS} from "../common";

export const soundsReducer = (state = true, action) => {
    if(action.type === TOGGLE_SOUNDS){
        return !state;
    }
    return state;
};