
import {ADD_EXP, GET_NEW_LEVEL} from "../common";
import {getExpLevel} from "../../projectCommon";
import {selectExp, selectPlayerLevel} from "../selectors";

export const levelOperation  = store => next => action => {
    if(action.type === ADD_EXP){
        let expAdd = action.exp;
        const state = store.getState();
        let exp = selectExp(state);
        console.log(selectPlayerLevel(state));
        let expLevel = getExpLevel(selectPlayerLevel(state));
        console.log(exp, expAdd, expLevel);
        if(exp + expAdd >= expLevel){
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
        console.groupEnd("LEVEL OPrATIOn");
    }else{
        next(action);
    }
};