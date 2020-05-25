import {ADD_DONE_LEVEL, BUY_GAME, BUY_LEVELS_DIFF, CHANGE_PROGRESS_FROM_PLAYER_DATA} from "../common";
import {gamesNames} from "../../projectCommon";

let gamesProgress = localStorage.getItem('gamesProgress');
if(gamesProgress){
  gamesProgress = JSON.parse(gamesProgress);
} else{
    gamesProgress = {};
    function getGameProgress() {
        return {
            gameOpen: false,
            doneLevels: [0, 0, 0, 0],
            openedLevels: [1, 1, 1, 0]
        }
    }
    Object.keys(gamesNames).forEach((key, index)=>{
        const newProgress = getGameProgress();
        if(index < 3) newProgress.gameOpen = true;
        gamesProgress[key] = newProgress;
    });
}

export const progressReducer = (state = gamesProgress, action) => {
    if(action.type === ADD_DONE_LEVEL){
        const newState = {...state};
        newState[action.payload.game]
            .doneLevels[action.payload.difficult]
        = action.payload.doneLevels;
        localStorage.setItem('gamesProgress', JSON.stringify(newState));
        return newState;
    }else if(action.type === CHANGE_PROGRESS_FROM_PLAYER_DATA){
        return action.progress;
    }else if(action.type === BUY_GAME){
        const newState = {...gamesProgress};
        newState[action.payload.game].gameOpen = true;
        localStorage.setItem('gamesProgress', JSON.stringify(newState));
        return newState;
    }else if(action.type === BUY_LEVELS_DIFF){
        const newState = {...gamesProgress};
        newState[action.payload.game].openedLevels[action.payload.level] = 1;
        localStorage.setItem('gamesProgress', JSON.stringify(newState));
        return newState;
    }
    return state;
};
