import {selectPremium, selectPremiumTime} from "../selectors";
import {setPremium} from "../ac";

export const premiumOperation  = store => next => action => {
    let state = store.getState();
    let isPremium = selectPremium(state);
    let premiumTime = selectPremiumTime(state);
    if(isPremium && Number(new Date()) > premiumTime){
        next(setPremium(false));
    }else if(!isPremium && new Date() < premiumTime){
        next(setPremium(true));
    }
    next(action);
};