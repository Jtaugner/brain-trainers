import {combineReducers} from 'redux'
import {moneyReducer} from "./moneyReducer";
import {levelReducer} from "./levelReducer";
import {expReducer} from "./expReducer";
import {purchasesReducer} from "./purchasesReducer";
import {progressReducer} from "./progressReducer";
import {settingsReducer} from "./settingsReducer";
import {soundsReducer} from "./soundsReducer";

const reducer = combineReducers({

    money: moneyReducer,
    level: levelReducer,
    exp: expReducer,
    purchases: purchasesReducer,
    progress: progressReducer,
    settings: settingsReducer,
    sounds: soundsReducer
});

export {reducer};