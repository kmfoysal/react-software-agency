import { faDollarSign, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;

    let totalQuantity = 0;
    let total = 0;
    let person = null;
    for (const developer of cart) {
        if (!developer.quantity) {
            developer.quantity = 1;
        }
        total = total + developer.salary * developer.quantity;
        totalQuantity = totalQuantity + developer.quantity;
        person = developer.name;
       
    }


    return (
        <div className='cart'>
            <h3><FontAwesomeIcon className='icon' icon={faUser} />Developers Added : {totalQuantity}</h3>
            <h3><FontAwesomeIcon className='icon' icon={faDollarSign} />Total Cost : {total}</h3>

            <h4>Name : {person}</h4>
        </div>
    );
};

export default Cart;