import {CHANGE_CAN_OPEN_GIFT} from "../common";

export const canOpenGiftReducer = (state = false, action) => {
    if(action.type === CHANGE_CAN_OPEN_GIFT){
        return action.canOpen;
    }
    return state;
};