import React from 'react';
import './SingleDeveloper.css';

const SingleDeveloper = (props) => {
    const {img,name } = props;
    return (
        <div className='single-developer-box'>
            
            <img src={img} alt="" />
            <h4>{name}</h4>
            
        </div>
    );
};

export default SingleDeveloper;