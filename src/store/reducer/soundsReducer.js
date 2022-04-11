import {getFromLocalStorage, setToLocalStorage, TOGGLE_SOUNDS} from "../common";

let isSounds = getFromLocalStorage('sounds', undefined, true);
if(isSounds) isSounds = isSounds === 'true';
else isSounds = true;

export const soundsReducer = (state = isSounds, action) => {
    if(action.type === TOGGLE_SOUNDS){
        setToLocalStorage('sounds', !state);
        return !state;
    }
    return state;
};