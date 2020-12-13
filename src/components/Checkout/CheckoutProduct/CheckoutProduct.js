import React from 'react';
import './CheckoutProduct.css';

import { useStateValue } from '../../../contextAPI/StateProvider';

const CheckoutProduct = ({ id, image, title, price, rating, hideBtn }) => {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        });
    };

    return (
        <div className='checkoutProduct'>
            <img src={image} className='checkoutProduct__image' alt='' />

            <div className='checkoutProduct__info'>
                <p className='checkoutProduct__title'>{title}</p>
                <p className='checkoutProduct__price'>
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className='checkoutProduct__rating'>
                    {Array(rating)
                        .fill()
                        .map((value, index) => (
                            <p key={index}>⭐</p>
                        ))}
                </div>
                {!hideBtn && <button onClick={removeFromBasket}>Remove from basket</button>}
            </div>
        </div>
    );
};

export default CheckoutProduct;
