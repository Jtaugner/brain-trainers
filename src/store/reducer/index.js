import {combineReducers} from 'redux'
import {moneyReducer} from "./moneyReducer";
import {levelReducer} from "./levelReducer";
import {expReducer} from "./expReducer";
import {purchasesReducer} from "./purchasesReducer";


const reducer = combineReducers({
    money: moneyReducer,
    level: levelReducer,
    exp: expReducer,
    purchases: purchasesReducer,
});

export {reducer};