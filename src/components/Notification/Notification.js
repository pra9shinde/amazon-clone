import React from 'react';
import './Notification.css';

const Notification = (props) => {
    return (
        <div className={`notification ${props.class}`}>
            <p>{props.message}</p>
        </div>
    );
};

export default Notification;
