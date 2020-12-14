import React from 'react';
import Product from '../Product/Product';
import './Home.css';

const Home = () => {
    return (
        <div className='home'>
            <div className='home__container'>
                <img
                    className='home__image'
                    src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
                    alt=''
                />

                <div className='home__row'>
                    <Product
                        id='100'
                        title='The Lean Startup: How Constant Innovation Creates Radically Successful Businesses '
                        image='https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg'
                        price='350'
                        rating={5}
                    />
                    <Product
                        id='101'
                        title='Samsung Galaxy A51 (Blue, 6GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers'
                        image='https://images-na.ssl-images-amazon.com/images/I/81qVoEhymIL._SL1500_.jpg'
                        price='22999'
                        rating={4}
                    />
                </div>

                <div className='home__row three_rows'>
                    <Product
                        id='102'
                        title='HP 410 All-in-One Wireless Ink Tank Color Printer with Voice-Activated Printing(Works with Alexa and Google Voice- Assistant) '
                        image='https://images-na.ssl-images-amazon.com/images/I/612SY5kuGBL._SL1500_.jpg'
                        price='12499'
                        rating={3}
                    />
                    <Product
                        id='103'
                        title='Seagate Backup Plus Portable 5 TB External HDD – USB 3.0 for Windows and Mac, 3 yr Data Recovery Services, Portable Hard Drive – Black with 4 Months Adobe CC Photography (STHP5000400)'
                        image='https://images-na.ssl-images-amazon.com/images/I/91zYlmkap9L._SL1500_.jpg'
                        price='8999'
                        rating={5}
                    />
                    <Product
                        id='104'
                        title='Think Like a Monk Paperback – 8 September 2020 '
                        image='https://images-na.ssl-images-amazon.com/images/I/81s6DUyQCZL.jpg'
                        price='450'
                        rating={5}
                    />
                </div>

                <div className='home__row'>
                    <Product
                        id='105'
                        title='Sapiens: A Brief History of Humankind Paperback – 11 June 2015 '
                        image='https://images-na.ssl-images-amazon.com/images/I/71fsQxIlggL.jpg'
                        price='250'
                        rating={2}
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
