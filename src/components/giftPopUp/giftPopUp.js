import React from 'react';
import './giftPopUp.scss'
import popUpBlackout from "../../decorators/pop-up-blackout/PopUpBlackout";
import {selectGameSDK, selectRewardedTime, selectSounds} from "../../store/selectors";
import {connect} from "react-redux";
import {showVideo} from "../../store/ac";
import {giftSound} from "../../sounds";

function GiftPopUp(props) {
    const {
        moneyPerGift,
        gameSDK,
        showVideo,
        rewardedVideoTime,
        isSounds
    } = props;
    if(isSounds){
        giftSound.play();
    }
    const showRewarded = () => {
        props.onClick();
        showVideo(moneyPerGift);
        try{
            window.ym(63291265, 'params', {'showGiftRewarded': 1});
        }catch(ignored){}
    };
    return (

        <div className={'close-game gift-pop-up'}>
            <div className={'close-game__header'}>
                <h3>Ваш подарок</h3>
                <div className="close-game__close" onClick={() => props.onClick()}/>
            </div>
            <p>
                {gameSDK && rewardedVideoTime
                    ?
                    'Вы можете посмотреть видео и получить вдвое больше монет'
                    :
                    'Ваш подарок'
                }
                </p>
            <div className="prize">
                {moneyPerGift}
                <div className="money-img"/>
            </div>
            {gameSDK && rewardedVideoTime ? <div className="show-video" onClick={showRewarded}>
                Видео
                <div className="free-money"/>
            </div> : ''
            }

        </div>


    );
}


export default connect(
    (store) => ({
        gameSDK: selectGameSDK(store),
        rewardedVideoTime: selectRewardedTime(store),
        isSounds: selectSounds(store)
    }),
    (dispatch)=>({
        showVideo: (money) => {
            dispatch(showVideo(money));
        }
    })
)(popUpBlackout(GiftPopUp));
