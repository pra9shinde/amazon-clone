import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal/Subtotal';

import { useStateValue } from '../../contextAPI/StateProvider';
import CheckoutProduct from './CheckoutProduct/CheckoutProduct';

const Checkout = () => {
    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className='checkout'>
            <div className='checkout__left'>
                <img
                    className='checkout_ad'
                    src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg'
                    alt='advertisement'
                />
                <div>
                    <h2 className='checkout__title'>Your shopping basket</h2>

                    {basket.map((item, index) => (
                        <CheckoutProduct
                            key={index}
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                </div>
            </div>

            <div className='checkout__right'>
                <Subtotal />
            </div>
        </div>
    );
};

export default Checkout;
