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

const reducer = combineReducers({

    money: moneyReducer,
    level: levelReducer,
    exp: expReducer,
    purchases: purchasesReducer,
    progress: progressReducer,
    settings: settingsReducer,
    sounds: soundsReducer,
    game: gameReducer,
    difficult: difficultReducer,
});

export {reducer};