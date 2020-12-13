import React, { useEffect, useState } from 'react';
import './Payment.css';

import { Link, useHistory } from 'react-router-dom';
import { useStateValue } from '../../contextAPI/StateProvider';
import CheckoutProduct from '../Checkout/CheckoutProduct/CheckoutProduct';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from '../../contextAPI/reducer';
import axios from '../../axios';
import { db } from '../../firebase';

const Payment = () => {
    const history = useHistory();

    const [{ basket, user }, dispatch] = useStateValue();

    //For Stripe
    const [succeded, setSucceded] = useState(false);
    const [processing, setProcessing] = useState('');
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    const stripe = useStripe();
    const elements = useElements();

    const handlePaymentSubmit = async (e) => {
        e.preventDefault();
        setProcessing(true);

        const payload = await stripe
            .confirmCardPayment(clientSecret, {
                payment_method: {
                    card: elements.getElement(CardElement),
                },
            })
            .then(({ paymentIntent }) => {
                // Payment confirmation

                db.collection('users').doc(user?.uid).collection('orders').doc(paymentIntent.id).set({
                    basket: basket,
                    amount: paymentIntent.amount,
                    created: paymentIntent.created,
                });

                setSucceded(true);
                setError(null);
                setProcessing(false);

                dispatch({
                    type: 'EMPTY_BASKET',
                });

                history.replace('/orders');
            });
    };

    const handleChange = (e) => {
        setDisabled(e.empty);
        setError(e.error ? e.error.message : '');
    };

    useEffect(() => {
        // Generate stripeSecret
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                url: `/payments/create?total=${getBasketTotal(basket)}`,
            });

            setClientSecret(response.data.clientSecret);
        };

        getClientSecret();
    }, [basket]);

    console.log('SecretKey >>>>>>>>> ' + clientSecret);

    return (
        <div className='payment'>
            <div className='payment__container'>
                <h1>
                    Checkout (<Link to='/checkout'>{basket?.length} items</Link>)
                </h1>
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Delivery Address</h3>
                    </div>
                    <div className='payment__address'>
                        <p>{user?.email}</p>
                        <p>123 React lane</p>
                        <p>Mumbai, India</p>
                    </div>
                </div>

                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Review items & Delivery</h3>
                    </div>
                    <div className='payment__items'>
                        {basket.map((item) => (
                            <CheckoutProduct id={item.id} title={item.title} image={item.image} price={item.price} rating={item.rating} />
                        ))}
                    </div>
                </div>
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Payment Method</h3>
                    </div>
                    <div className='payment__details'>
                        <form onSubmit={handlePaymentSubmit}>
                            <CardElement onChange={handleChange} />
                            <div className='payment__priceContainer'>
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <>
                                            <h3>Order Total: {value}</h3>
                                        </>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    prefix={'₹'}
                                />
                                <button disabled={processing || disabled || succeded}>
                                    <span>{processing ? <p>processing</p> : 'Buy Now'}</span>
                                </button>
                            </div>

                            {/* stripe errors, show them if any */}
                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Payment;
