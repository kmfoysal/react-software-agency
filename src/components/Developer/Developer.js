import { faFacebookF, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Developer.css';


const Developer = (props) => {
    const {img, name, designation, age, country, salary} = props.developer;
    return (
        <div className='developer'>
            <div className='single-developer'>
                <img src={img} alt="img" />
                <p><strong>Name :</strong> {name}</p>
                <p><strong>Designation :</strong> {designation}</p>
                <p><strong>Age :</strong> {age}</p>
                <p><strong>Country :</strong> {country}</p>
                <p><strong>Salary :</strong> ${salary}</p>
                
                <button
                onClick={() => props.handleAddToCart(props.developer)}><FontAwesomeIcon className='icon' icon={faShoppingCart} />
                Add To Cart</button>

                <div className="social-link">
                    <a href="/"><FontAwesomeIcon icon={faGithub} /></a>
                    <a href="/"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                    <a href="/"><FontAwesomeIcon icon={faFacebookF} /></a>
                </div>
            </div>
            
        </div>
    );
};

export default Developer;