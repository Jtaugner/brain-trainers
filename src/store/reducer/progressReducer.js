import {} from "../common";
import {gamesNames} from "../../projectCommon";
const gamesProgress = {};
function getGameProgress() {
    return {
        gameOpen: false,
        doneLevels: [0, 0, 0, 0],
        openedLevels: [1, 1, 1, 0]
    }
}
Object.keys(gamesNames).forEach((key, index)=>{
   //arr[1] - название игры
    const newProgress = getGameProgress();
    if(index < 3) newProgress.gameOpen = true;
    gamesProgress[key] = newProgress;
});
export const progressReducer = (state = gamesProgress, action) => {
    return state;
};
