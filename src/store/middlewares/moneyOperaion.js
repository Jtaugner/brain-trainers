import {selectMoney} from "../selectors";
import {CHANGE_NOT_ENOUGH_MONEY} from "../common";
import {changeNotEnoughMoney} from "../ac";

export const moneyOperation  = store => next => action => {
    if(action.buying){
        let money = selectMoney(store.getState());
        if(money >= action.payload.money){
            next({
                type: 'SUBTRACT_MONEY',
                money: action.payload.money
            });
            next(action);
        }else{
            next(changeNotEnoughMoney(true))

        }
    }else{
        next(action);
    }
};