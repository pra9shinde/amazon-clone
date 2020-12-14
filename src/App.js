import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Checkout from './components/Checkout/Checkout';
import Login from './components/Login/Login';
import Payment from './components/Payment/Payment';
import Orders from './components/Orders/Orders';
import Footer from './components/Footer/Footer';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { auth } from './firebase';
import { useStateValue } from './contextAPI/StateProvider';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe('pk_test_DKKHhrmeHfKEk0OxQFN2up5j00YxbRW6SV');

function App() {
    const [{ user }, dispatch] = useStateValue();

    useEffect(() => {
        auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                // User logged in
                dispatch({
                    type: 'SET_USER',
                    user: authUser,
                });
            } else {
                // User logged out
                dispatch({
                    type: 'SET_USER',
                    user: null,
                });
            }
        });
    }, []);

    return (
        <Router>
            <div className='app'>
                <Switch>
                    <Route path='/checkout'>
                        <Header />
                        <Checkout />
                        <Footer />
                    </Route>
                    <Route path='/login'>
                        <Login />
                    </Route>
                    <Route path='/payment'>
                        <Header />
                        <Elements stripe={promise}>
                            <Payment />
                        </Elements>
                        <Footer />
                    </Route>
                    <Route path='/orders'>
                        <Header />
                        <Orders />
                        <Footer />
                    </Route>
                    <Route path='/'>
                        <Header />
                        <Home />
                        <Footer />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
