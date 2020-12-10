import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal/Subtotal';

const Checkout = () => {
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
                    {/* Basket Item */}
                    {/* Basket Item */}
                </div>
            </div>

            <div className='checkout__right'>
                <Subtotal />
            </div>
        </div>
    );
};

export default Checkout;
