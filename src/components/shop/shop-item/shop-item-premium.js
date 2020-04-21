import React from 'react';
import './shop-item.scss'
function ShopItemPremium(props) {
    const {days, price,
        className,
        onClick} = props;
    return (
        <>
            <div className={'shop-item shop-item__free_premium'} onClick={onClick}>
                <div className="shop-item__pic" />
                <div className="shop-item__money">{days} дней</div>
                <div className="shop-item__buy-button">
                    {price}₽
                </div>
            </div>
        </>
    );
}

export default ShopItemPremium;
