import React from 'react';
import './shop-item.scss'
function ShopItem(props) {
    const {money, price,
        className,
        onClick} = props;
    return (
        <>
            <div className={'shop-item '
            + (className ? className : '')} onClick={onClick}>
                <div className="shop-item__pic" />
                <div className="shop-item__money">{money} монет</div>
                <div className="shop-item__buy-button">
                    {price === 0 ? <div className={'free-money'} /> : price + '₽'}
                </div>
            </div>
        </>
    );
}

export default ShopItem;