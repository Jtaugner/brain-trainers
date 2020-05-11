import {selectMoney} from "../selectors";

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
            alert('Недостаточнос средств');
        }
    }else{
        next(action);
    }
};