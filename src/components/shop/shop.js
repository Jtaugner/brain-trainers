import React from 'react';
import './shop.scss'
import {connect} from "react-redux";
import BottomMainMenu from "../bottomMainMenu/bottomMenu";
import TopMenu from "../topMenu";
import {selectGameSDK, selectMoney, selectPayments, selectPremiumTime, selectRewardedTime} from "../../store/selectors";
import ShopItem from "./shop-item";
import {moneyPrice} from "../../projectCommon";
import {premiumPrice} from "../../projectCommon";
import ShopItemPremium from "./shop-item/shop-item-premium";
import {addMoney, changeGamePayments, changePremiumTime, showVideo} from "../../store/ac";
import {initPlayer, saveData} from "../../index";
import {giveParams} from "../../App";

function Shop(props) {
    const {money, rewardedVideoTime, gameSDK, showVideo,
        payments, addMoney, addPremiumTime, premiumTime} = props;

    const changePremiumTime = (days) => {
        const newDate = +new Date();
        let newTime;
        if(premiumTime > newDate){
            newTime = premiumTime + (days * 24 * 60 * 60 * 1000);
        }else{
            newTime = newDate + (days * 24 * 60 * 60 * 1000);
        }
        addPremiumTime(newTime);
    };
    const showRewardedVideo = () => {
        showVideo();
    };
    const buyThing = (id) => {
        if(payments){
            let purchaseItem = id;
            payments.purchase(purchaseItem).then(purchase => {
                if(purchase.productID === purchaseItem){
                    for(let i = 0; i < moneyPrice.length; i++){
                        if(moneyPrice[i].id === purchaseItem){
                            addMoney(moneyPrice[i].money);
                            break;
                        }
                    }
                    for(let i = 0; i < premiumPrice.length; i++){
                        if(premiumPrice[i].id === purchaseItem){
                            changePremiumTime(premiumPrice[i].days);
                            break;
                        }
                    }
                    giveParams({[purchaseItem]: 1});
                    payments.consumePurchase(purchase.purchaseToken);
                    saveData();
                }
            }).catch((e)=>{
                console.log("PAYMENTS ERROR: " + e);
            });
        }else{
            gameSDK.auth.openAuthDialog().then(() => {
                initPlayer(gameSDK, true);
            }).catch((ignored) => {// Игрок не авторизован.
            });
        }
    };
    return (
        <div className="shop">
            <TopMenu>
                <div className={'shop__header'}>МАГАЗИН</div>
            </TopMenu>
            <div
                className={'shop__money'}
            >У вас <span className={'color-money'}> {money} </span>
                <div className="money-img"/>
                монет
            </div>
            {
                rewardedVideoTime && gameSDK ?
                    <ShopItem
                        className={'shop-item__free'}
                        money={25}
                        price={0}
                        onClick={showRewardedVideo}
                    />
                    : ''
            }

            {premiumPrice.map((obj, index) =>
                <ShopItemPremium
                    key={'premium' + index}
                    days={obj.days}
                    price={obj.price}
                    onClick={()=>buyThing(obj.id)}
                />
            )}
            {moneyPrice.map((obj, index) =>
                <ShopItem
                    key={'money' + index}
                    money={obj.money}
                    price={obj.price}
                    className={obj.className}
                    onClick={()=>buyThing(obj.id)}
                />
            )}
            <BottomMainMenu/>
        </div>

    );
}

export default connect((store) => ({
        gameSDK: selectGameSDK(store),
        money: selectMoney(store),
        rewardedVideoTime: selectRewardedTime(store),
        payments: selectPayments(store),
        premiumTime: selectPremiumTime(store)
    }),
    (dispatch) => ({
        showVideo: () => {
            dispatch(showVideo(25));
        },
        addMoney: (money) => dispatch(addMoney(money)),
        addPremiumTime: (newTime) => {
            dispatch(changePremiumTime(newTime));
        },
        changePayments: (payments) => dispatch(changeGamePayments(payments))
    })
)(Shop);
