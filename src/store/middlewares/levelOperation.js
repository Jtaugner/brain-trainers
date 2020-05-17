
import {ADD_EXP, GET_NEW_LEVEL} from "../common";
import {getExpLevel, getLevelPrize} from "../../projectCommon";
import {selectExp, selectPlayerLevel} from "../selectors";
import {addMoney, changePremiumTime} from "../ac";

export const levelOperation  = store => next => action => {
    if(action.type === ADD_EXP){
        let expAdd = action.exp;
        const state = store.getState();
        let exp = selectExp(state);
        let level = selectPlayerLevel(state);
        let expLevel = getExpLevel(level);
        console.log(exp, expAdd, expLevel);
        if(exp + expAdd >= expLevel){
            //Выдать приз
            let prize = getLevelPrize(level);
            if(prize.money){
                next(addMoney(prize.money));
            }else if(prize.premium){
                const premiumEnds = Number(new Date()) + prize.premium;
                next(changePremiumTime(premiumEnds));
            }
            next({
                type: GET_NEW_LEVEL
            });
            next({
                type: ADD_EXP,
                exp: exp + expAdd - expLevel
            })
        }else{
            next({
                type: ADD_EXP,
                exp: exp + expAdd
            })
        }
    }else{
        next(action);
    }
};