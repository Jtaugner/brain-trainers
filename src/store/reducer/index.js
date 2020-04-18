import {combineReducers} from 'redux'
import {moneyReducer} from "./moneyReducer";
import {levelReducer} from "./levelReducer";
import {expReducer} from "./expReducer";
import {purchasesReducer} from "./purchasesReducer";
import {progressReducer} from "./progressReducer";

const reducer = combineReducers({

    money: moneyReducer,
    level: levelReducer,
    exp: expReducer,
    purchases: purchasesReducer,
    progress: progressReducer
});

export {reducer};