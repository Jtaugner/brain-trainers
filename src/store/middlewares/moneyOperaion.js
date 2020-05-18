import {selectMoney} from "../selectors";
import {changeNotEnoughMoney} from "../ac";

export const moneyOperation  = store => next => action => {
    if(action.buying){
        const state=store.getState();
        let money = selectMoney(state);
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