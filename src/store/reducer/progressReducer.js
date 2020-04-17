import {} from "../common";
import {gamesNames} from "../../projectCommon";
const gamesProgress = {};
function getGameProgress() {
    //arr[0]: 1 - игра открыта, 0 - игра закрыта
    //arr[1]:
    // arr[0-3] - последний уровень в каждой сложности
    return [0, [0, 0, 0, 0] ]
}
gamesNames.forEach((arr, index)=>{
   //arr[1] - название игры
    const newProgress = getGameProgress();
    if(index < 3) newProgress[0] = 1;
    gamesProgress[arr[1]] = newProgress;
});
export const progressReducer = (state = gamesProgress, action) => {
    return state;
};
