import {} from "../common";
import {gamesNames} from "../../projectCommon";
import {ADD_DONE_LEVEL} from "../common";
import {CHANGE_PROGRESS_FROM_PLAYER_DATA} from "../common";
const gamesProgress = {};
function getGameProgress() {
    return {
        gameOpen: false,
        doneLevels: [50, 50, 50, 50],
        openedLevels: [1, 1, 1, 1]
    }
}
Object.keys(gamesNames).forEach((key, index)=>{
   //arr[1] - название игры
    const newProgress = getGameProgress();
    // if(index < 3) newProgress.gameOpen = true;
    //ДЛЯ ТЕСТИРОВАНИЯ!!!!
    if(index < 15) newProgress.gameOpen = true;
    gamesProgress[key] = newProgress;
});
export const progressReducer = (state = gamesProgress, action) => {
    if(action.type === ADD_DONE_LEVEL){
        const newState = {...gamesProgress};
        newState[action.payload.game]
            .doneLevels[action.payload.difficult]
        = action.payload.doneLevels;
    }else if(action.type === CHANGE_PROGRESS_FROM_PLAYER_DATA){
        return action.progress;
    }
    return state;
};
