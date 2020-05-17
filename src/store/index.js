import {applyMiddleware, createStore} from 'redux'
import {reducer} from './reducer'
import thunk from 'redux-thunk'
import {moneyOperation} from "./middlewares/moneyOperaion";
import {levelOperation} from "./middlewares/levelOperation";
import {premiumOperation} from "./middlewares/premiumOperaion";
const enhancer = applyMiddleware(thunk, moneyOperation, levelOperation, premiumOperation);



export const store = createStore(reducer, enhancer);