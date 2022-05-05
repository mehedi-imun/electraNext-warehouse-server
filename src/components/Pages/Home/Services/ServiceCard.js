import React from 'react';
import './ServiceCard.css'
const ServiceCard = ({service}) => {
    const {name,img}= service;
    return (
        <div className='col-md-4 col-6 d-flex justify-content-center '>
            <div className='service d-flex flex-column align-items-center justify-content-between text-center'>
                <img src={img} alt="" />
                <h4>{name}</h4>
            </div>
        </div>
    );
};

export default ServiceCard;