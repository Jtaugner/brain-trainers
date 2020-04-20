import React from 'react';
import './shop.scss'
import {connect} from "react-redux";
import BottomMainMenu from "../bottomMainMenu/bottomMenu";
import TopMenu from "../topMenu";
import {selectMoney} from "../../store/selectors";
import ShopItem from "./shop-item";
import {moneyPrice} from "../../projectCommon";

function Shop(props) {
    const {money} = props;
    return (
        <div className="shop">
            <TopMenu><div className={'shop__header'}>МАГАЗИН</div></TopMenu>
            <div
                className={'shop__money'}
            >У вас  <span className={'color-money'}> {money} </span> <div className="money-img" /> монет
            </div>
            <ShopItem
                className={'shop-item__free'}
                money={25}
                price={0}
            />
            {moneyPrice.map((arr)=>
             <ShopItem
                money={arr[0]}
                price={arr[1]}
             />
            )}
        </div>

    );
}

export default connect((store)=>({
    money: selectMoney(store)
}))(Shop);
