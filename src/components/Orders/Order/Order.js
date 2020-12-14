import React from 'react';
import './Order.css';

import moment from 'moment';
import CheckoutProduct from '../../Checkout/CheckoutProduct/CheckoutProduct';
import CurrencyFormat from 'react-currency-format';

const Order = ({ order }) => {
    return (
        <div className='order'>
            <h2>Order: </h2>
            <p className='order__id'>
                <small> {order.id}</small>
            </p>
            <p>{moment.unix(order.data.created).format('MMMM Do YYYY, h:mma')}</p>

            {order.data.basket?.map((item, index) => (
                <CheckoutProduct
                    key={index}
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    hideBtn={true}
                />
            ))}

            <div className='order__total'>
                <CurrencyFormat
                    renderText={(value) => (
                        <>
                            <h3>Order Total: {value}</h3>
                        </>
                    )}
                    decimalScale={2}
                    value={order.data.amount / 100}
                    displayType={'text'}
                    thousandSeparator={true}
                    prefix={'₹'}
                />
            </div>
        </div>
    );
};

export default Order;
