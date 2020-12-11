import React from 'react';
import './Login.css';
import Notification from '../Notification/Notification';
import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';
import { auth } from '../../firebase';

const Login = () => {
    const history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [notification, setNotification] = useState(false);
    const [notificationClass, setNotificationClass] = useState('');
    const [notificationMessage, setNotificationMessage] = useState('');

    const signInHandler = (e) => {
        e.preventDefault();
        // Firebase login
        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
                if (auth) {
                    setNotification(true);
                    setNotificationClass('green');
                    setNotificationMessage('Login Successfull');

                    setEmail('');
                    setPassword('');

                    setTimeout(() => {
                        history.push('/');
                    }, 2000);
                }
            })
            .catch((e) => {
                setNotification(true);
                setNotificationClass('red');
                setNotificationMessage(e.message);
            });
    };

    const registerHandler = (e) => {
        e.preventDefault();
        if (email.length > 0 && password.length > 0) {
            // Firebase register

            auth.createUserWithEmailAndPassword(email, password)
                .then((auth) => {
                    if (auth) {
                        setNotification(true);
                        setNotificationClass('green');
                        setNotificationMessage('Login Successfull');

                        setEmail('');
                        setPassword('');

                        setTimeout(() => {
                            history.push('/');
                        }, 2000);
                    }
                })
                .catch((e) => {
                    setNotification(true);
                    setNotificationClass('red');
                    setNotificationMessage(e.message);
                });
        } else {
            setNotification(true);
            setNotificationClass('red');
            setNotificationMessage('Enter Email and Password to register');
        }
    };

    return (
        <div className='login'>
            <Link to='/'>
                <img
                    className='login__logo'
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
                    alt=''
                />
            </Link>

            {notification ? <Notification message={notificationMessage} class={notificationClass} /> : null}

            <div className='login__container'>
                <h1>Sign-in</h1>
                <form>
                    <h5>Email</h5>
                    <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button type='submit' className='login_siginBtn' onClick={signInHandler}>
                        Sign In
                    </button>
                    <p>By continuing, you agree to Amazon's React Clone Conditions of Use and Privacy Notice. </p>
                    <button className='login_registerBtn' type='submit' onClick={registerHandler}>
                        Create your Amazon Account
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
