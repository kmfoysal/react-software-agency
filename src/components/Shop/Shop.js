import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Developer from '../Developer/Developer';
import './Shop.css';

const Shop = () => {

    const [developers, setDevelopers] = useState([]);
    const [cart, setCart] = useState([]);
    const [singleDevelopers, setSingleDevelopers] = useState([]);


    useEffect(() => {
        fetch('./data.JSON')
        .then(res => res.json())
        .then(data => setDevelopers(data));
    },[]);


    const handleAddToCart = (developer) => {
        const newCart = [...cart, developer];
        setCart(newCart);
        const singleDev = [...singleDevelopers, developer];
        setSingleDevelopers(singleDev);
    }


    return (
        <div className="container">
            <div className='shop-container'>
            <div className="developer-container">
                {
                    developers.map(developer => <Developer
                    key={developer.img}
                    developer={developer}
                    handleAddToCart={handleAddToCart}>
                    </Developer>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart} singleDeveloper={singleDevelopers}></Cart>
            </div>
        </div>
        </div>
    );
};

export default Shop;