import React from 'react';
import './Header.css';

import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../contextAPI/StateProvider';
import { auth } from '../../firebase';

const Header = () => {
    const [state, dispatch] = useStateValue();

    const handleAuthentication = () => {
        if (state.user) {
            auth.signOut();
        }
    };

    return (
        <div className='header'>
            <Link to='/'>
                <img className='header__logo' src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='Amazon Logo' />
            </Link>
            <div className='header__search'>
                <input type='text' className='header__searchInput' />
                <SearchIcon className='header__searchIcon' />
            </div>

            <div className='header__nav'>
                <Link to='/login' style={{ textDecoration: 'none', outline: 'none' }}>
                    <div className='header__option' onClick={handleAuthentication}>
                        <span className='header__optionLineOne'>Hello {state.user ? state.user.email : 'user'}</span>
                        <span className='header__optionLineTwo'>{state.user ? 'Sign out' : 'Sign in'}</span>
                    </div>
                </Link>

                <Link to='/orders' style={{ textDecoration: 'none', outline: 'none' }}>
                    <div className='header__option'>
                        <span className='header__optionLineOne'>Returns</span>
                        <span className='header__optionLineTwo'>& Orders</span>
                    </div>
                </Link>
                <div className='header__option'>
                    <span className='header__optionLineOne'>Your</span>
                    <span className='header__optionLineTwo'>Prime</span>
                </div>
            </div>

            <Link to='/checkout'>
                <div className='header__optionBasket'>
                    <ShoppingBasketIcon />
                    <span className='header__optionLineTwo header__basketCount'>{state.basket?.length}</span>
                </div>
            </Link>
        </div>
    );
};

export default Header;
