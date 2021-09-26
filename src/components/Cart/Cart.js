import { faDollarSign, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import SingleDeveloper from '../SingleDeveloper/SingleDeveloper';
import './Cart.css';

const Cart = (props) => {
    const { cart, singleDeveloper } = props;



    let totalQuantity = 0;
    let total = 0;
    
    for (const developer of cart) {
        if (!developer.quantity) {
            developer.quantity = 1;
        }
        total = total + developer.salary * developer.quantity;
        totalQuantity = totalQuantity + developer.quantity;

    }


    return (
        <div className='cart'>
            <h3><FontAwesomeIcon className='icon' icon={faUser} />Developers Added : {totalQuantity}</h3>
            <h3><FontAwesomeIcon className='icon' icon={faDollarSign} />Total Cost : {total}</h3>

            {singleDeveloper.map((developer) => <SingleDeveloper 
                                     name={developer.name}
                                     img={developer.img}
                                     key={developer.img} 
                                     >

                                     </SingleDeveloper>)}
        </div>
    );
};

export default Cart;