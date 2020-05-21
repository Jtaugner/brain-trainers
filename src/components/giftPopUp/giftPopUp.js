import React from 'react';
import './giftPopUp.scss'
import popUpBlackout from "../../decorators/pop-up-blackout/PopUpBlackout";
import {selectGameSDK, selectRewardedTime} from "../../store/selectors";
import {connect} from "react-redux";
import {showVideo} from "../../store/ac";

function GiftPopUp(props) {
    const {
        moneyPerGift,
        gameSDK,
        showVideo,
        rewardedVideoTime
    } = props;
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
            {gameSDK && rewardedVideoTime ? <div className="show-video" onClick={showVideo}>
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
        rewardedVideoTime: selectRewardedTime(store)
    }),
    (dispatch)=>({
        showVideo: (money) => {
            dispatch(showVideo(money));
        }
    })
)(popUpBlackout(GiftPopUp));
