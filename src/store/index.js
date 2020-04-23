import {applyMiddleware, createStore} from 'redux'
import {reducer} from './reducer'
import thunk from 'redux-thunk'
import {moneyOperation} from "./middlewares/moneyOperaion";
import {levelOperation} from "./middlewares/levelOperation";
const enhancer = applyMiddleware(thunk, moneyOperation, levelOperation);



export const store = createStore(reducer, enhancer);