import React from 'react';
import { useStateValue } from '../../contextAPI/StateProvider';
import './Product.css';

const Product = ({ id, title, image, price, rating }) => {
    const [{ basket }, dispatch] = useStateValue();

    const addToBasket = () => {
        // dispatch
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
    };

    return (
        <div className='product'>
            <div className='product__info'>
                <p>{title}</p>
                <p className='product__price'>
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className='product__rating'>
                    {Array(rating)
                        .fill()
                        .map((value, index) => (
                            <p key={index}>⭐</p>
                        ))}
                </div>
            </div>
            <img src={image} alt={title} />
            <button className='product__btn' onClick={addToBasket}>
                Add to Basket
            </button>
        </div>
    );
};

export default Product;
