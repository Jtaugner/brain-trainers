import React from 'react';
import './shop-item.scss'
function ShopItemPremium(props) {
    const {days, price,
        onClick} = props;
    return (
        <>
            <div className={'shop-item shop-item__free_premium'}>
                <div className="shop-item__pic" />
                <div className="shop-item__money">{days} дней</div>
                <div className="shop-item__buy-button" onClick={onClick}>
                    {price}₽
                </div>
            </div>
        </>
    );
}

export default ShopItemPremium;
