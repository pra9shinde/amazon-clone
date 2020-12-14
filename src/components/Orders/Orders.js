import React, { useEffect, useState } from 'react';
import './Orders.css';
import Order from './Order/Order';

import { db } from '../../firebase';
import { useStateValue } from '../../contextAPI/StateProvider';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [{ user }, dispatch] = useStateValue();

    useEffect(() => {
        if (user) {
            db.collection('users')
                .doc(user?.uid)
                .collection('orders')
                .orderBy('created', 'desc')
                .onSnapshot((snapshot) =>
                    setOrders(
                        snapshot.docs.map((doc) => ({
                            id: doc.id,
                            data: doc.data(),
                        }))
                    )
                );
        } else {
            setOrders([]);
        }
    }, [user]);

    return (
        <div className='orders'>
            <h1>Your Orders</h1>
            <div className='orders__order'>
                {orders.map((order) => (
                    <Order key={order.id} order={order} />
                ))}
            </div>
        </div>
    );
};

export default Orders;
