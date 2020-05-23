import {SHOW_ADV, SHOW_VIDEO} from "../common";
import {selectGameSDK, selectRewardedTime} from "../selectors";
import {addMoney, changeRewardTime} from "../ac";

let advTime = true;
export const advertMiddleware  = store => next => action => {
    if(action.type === SHOW_ADV){
        if(advTime){


            try{
                window.ym(63291265, 'params', {'showAdv': 1});
            }catch(ignored){}


            let sdk = selectGameSDK(store.getState());
            sdk.adv.showFullscreenAdv({
                callbacks: {
                    onClose: function(wasShown) {
                        if(wasShown){
                            advTime = false;
                            setTimeout(()=>{
                                advTime = true;
                            }, 190000);
                        }
                    }
                }
            });

        }
    }else if(action.type === SHOW_VIDEO){
        const state = store.getState();
        const rewardedTime = selectRewardedTime(state);
        if(rewardedTime){
            let sdk = selectGameSDK(state);
            sdk.adv.showRewardedVideo({
                callbacks: {
                    onRewarded: () => {
                        next(addMoney(action.money));
                    }
                }
            });
            next(changeRewardTime(false));
            setTimeout(()=>{
                next(changeRewardTime(true));
            }, 190000);

        }
    } else{
        next(action);
    }

};