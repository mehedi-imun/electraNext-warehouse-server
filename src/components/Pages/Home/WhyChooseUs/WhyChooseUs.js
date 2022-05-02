import React from 'react';
import './WhyChooseUs.css'
import { FaCheck } from 'react-icons/fa';
const WhyChooseUs = () => {
    return (
        <div className='why-choose'>
            <div className='why-choose-container d-flex flex-column justify-content-center h-100 text-white fs-6'>
                <h3>Why choose Us?</h3>
                <p><FaCheck></FaCheck> We have a highly experienced team.</p>
                <p><FaCheck></FaCheck> We care about what we do and we do it.</p>
                <p><FaCheck></FaCheck> We are flexible in our approach.</p>
                <p><FaCheck></FaCheck> We put our customers first.</p>
                <p><FaCheck></FaCheck> We measure our success on the level of our customer satisfaction.</p>
                <button className='btn btn-discover rounded-pill'>Discover More</button>

            </div>
        </div>
    );
};

export default WhyChooseUs;