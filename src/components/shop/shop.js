import React from 'react';
import './shop.scss'
import {connect} from "react-redux";
import BottomMainMenu from "../bottomMainMenu/bottomMenu";
import TopMenu from "../topMenu";
import {selectGameSDK, selectMoney, selectRewardedTime} from "../../store/selectors";
import ShopItem from "./shop-item";
import {moneyPrice} from "../../projectCommon";
import {premiumPrice} from "../../projectCommon";
import ShopItemPremium from "./shop-item/shop-item-premium";
import {showVideo} from "../../store/ac";

function Shop(props) {
    const {money, rewardedVideoTime, gameSDK, showVideo} = props;
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
                        onClick={showVideo}
                    />
                    : ''
            }

            {premiumPrice.map((arr, index) =>
                <ShopItemPremium
                    key={'premium' + index}
                    days={arr[0]}
                    price={arr[1]}
                />
            )}
            {moneyPrice.map((obj, index) =>
                <ShopItem
                    key={'money' + index}
                    money={obj.money}
                    price={obj.price}
                    className={obj.className}
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
    }),
    (dispatch) => ({
        showVideo: () => {
            dispatch(showVideo(25));
        }
    })
)(Shop);
