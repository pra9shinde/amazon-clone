import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer__container'>
                <div className='footer__top'>
                    <div className='footer__left'>
                        <div className='footer__content'>
                            <h5 className='footer_title'>Get to Know Us</h5>
                            <a href='#'>About Us</a>
                            <a href='#'>Careers</a>
                            <a href='#'>Press Releases</a>
                            <a href='#'>Amazon Cares</a>
                            <a href='#'>Gift a Smile</a>
                        </div>

                        <div className='footer__content'>
                            <h5 className='footer_title'>Connect with Us</h5>
                            <a href='#'>Facebook</a>
                            <a href='#'>Twitter</a>
                            <a href='#'>Instagram</a>
                        </div>
                    </div>

                    <div className='footer__right'>
                        <div className='footer__content'>
                            <h5 className='footer_title'>Make Money with Us</h5>
                            <a href='#'>Sell on Amazon</a>
                            <a href='#'>Sell under Amazon Accelerator</a>
                            <a href='#'>Become an Affiliate</a>
                            <a href='#'>Fulfilment by Amazon</a>
                        </div>

                        <div className='footer__content'>
                            <h5 className='footer_title'>Let Us Help You</h5>
                            <a href='#'>COVID-19 and Amazon</a>
                            <a href='#'>Your Account</a>
                            <a href='#'>Returns Centre</a>
                            <a href='#'>100% Purchase Protection</a>
                            <a href='#'>Amazon App Download</a>
                        </div>
                    </div>
                </div>
                <div className='footer__bottom'>
                    <div className='footer__logo'>
                        <img src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='' />
                    </div>
                    <p>© 2020 All rights reserverd.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
