import React from 'react';
import './giftPopUp.scss'
import popUpBlackout from "../../decorators/pop-up-blackout/PopUpBlackout";
import {selectGameSDK} from "../../store/selectors";
import {connect} from "react-redux";
import {addMoney} from "../../store/ac";

function GiftPopUp(props) {
    const {
        moneyPerGift,
        gameSDK,
        giveMoney
    } = props;
    const showRewarded = () => {
        gameSDK.adv.showRewardedVideo({
            callbacks: {
                onRewarded: () => {
                    giveMoney(moneyPerGift);
                },
            }
        });
    };
    return (

        <div className={'close-game gift-pop-up'}>
            <div className={'close-game__header'}>
                <h3>Ваш подарок</h3>
                <div className="close-game__close" onClick={() => props.onClick()}/>
            </div>
            <p>Вы можете посмотреть видео и получить вдвое больше монет</p>
            <div className="prize">
                {moneyPerGift}
                <div className="money-img"/>
            </div>
            {gameSDK ? <div className="show-video" onClick={showRewarded}>
                Видео
                <div className="free-money"/>
            </div> : ''
            }

        </div>


    );
}


export default connect(
    (store) => ({
        gameSDK: selectGameSDK(store)
    }),
    (dispatch)=>({
        giveMoney: (money) => {
            dispatch(addMoney(money));
        }
    })
)(popUpBlackout(GiftPopUp));
