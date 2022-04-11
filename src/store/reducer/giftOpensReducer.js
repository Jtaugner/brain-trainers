import {ADD_OPEN_GIFT, CHANGE_GIFT_OPENS_FROM_PLAYER_DATA, getFromLocalStorage, setToLocalStorage} from "../common";
import {giftTimes} from "../../projectCommon";
let gifts = getFromLocalStorage('gameGiftOpens', 0);
export const giftOpensReducer = (state = gifts, action) => {
    if(action.type === ADD_OPEN_GIFT){
        const newState =
            state === giftTimes.length-1 ? state : state + 1;

        setToLocalStorage('gameGiftOpens', newState);
        return newState;
    }else if(action.type === CHANGE_GIFT_OPENS_FROM_PLAYER_DATA){
        return action.gifts;
    }
    return state;
};