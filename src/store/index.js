import {applyMiddleware, createStore} from 'redux'
import {reducer} from './reducer'
import thunk from 'redux-thunk'
import {moneyOperation} from "./middlewares/moneyOperaion";
const enhancer = applyMiddleware(thunk, moneyOperation);



export const store = createStore(reducer, enhancer);