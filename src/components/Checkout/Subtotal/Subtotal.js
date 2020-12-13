import React from 'react';
import './Subtotal.css';

import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../../../contextAPI/StateProvider';
import { getBasketTotal } from '../../../contextAPI/reducer';
import { useHistory } from 'react-router';

const Subtotal = () => {
    const [{ basket, user }, dispatch] = useStateValue();
    const history = useHistory();
    let proceedBtn = <button onClick={(e) => history.push('/payment')}>Proceed to checkout</button>;
    if (getBasketTotal(basket) <= 0) {
        proceedBtn = <button disabled>Proceed to checkout</button>;
    }
    if (!user) {
        proceedBtn = <button disabled>Sign in to continue</button>;
    }

    return (
        <div className='subtotal'>
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket.length} items): <strong>{value}</strong>
                        </p>
                        <small className='subtotal__gift'>
                            <input type='checkbox' /> This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'₹'}
            />
            {proceedBtn}
        </div>
    );
};

export default Subtotal;
