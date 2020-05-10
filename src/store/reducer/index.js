import {combineReducers} from 'redux'
import {moneyReducer} from "./moneyReducer";
import {levelReducer} from "./levelReducer";
import {expReducer} from "./expReducer";
import {purchasesReducer} from "./purchasesReducer";
import {progressReducer} from "./progressReducer";
import {settingsReducer} from "./settingsReducer";
import {soundsReducer} from "./soundsReducer";
import {gameReducer} from "./gameReducer";
import {difficultReducer} from "./difficultReducer";
import {gameLevelReducer} from "./gameLevelReducer";
import {advTimeReducer, rewardedVideoTimeReducer} from "./advTimeReducer";
import {randomGameReducer} from "./randomGameReducer";

const reducer = combineReducers({

    money: moneyReducer,
    playerLevel: levelReducer,
    exp: expReducer,
    purchases: purchasesReducer,
    progress: progressReducer,
    settings: settingsReducer,
    sounds: soundsReducer,
    game: gameReducer,
    difficult: difficultReducer,
    gameLevel: gameLevelReducer,
    advTime: advTimeReducer,
    rewardedVideoTime: rewardedVideoTimeReducer,
    randomGame: randomGameReducer,

});

export {reducer};