import React from 'react';
import './OurProcess.css'
import { FaCartPlus, FaStore, } from 'react-icons/fa';
import { IoMdCheckboxOutline } from 'react-icons/io';
import { MdOutlineDeliveryDining } from 'react-icons/md';
const OurProcess = () => {
    return (
        <div className='process-box-body'>
            <h3 className='text-center mt-5 mb-5'>Our Process</h3>
            <div className='d-flex justify-content-around flex-wrap '>
                <div className='text-center mb-3'>
                    <div className='process-box ' ><IoMdCheckboxOutline /></div> <br />
                    <h6>box</h6>
                </div>
                <div className='text-center'>
                    <div className='process-box' ><FaCartPlus /></div> <br />
                    <h6>Collect</h6>
                </div>
                <div className='text-center'>
                    <div className='process-box' ><FaStore /></div> <br />
                    <h6>Store</h6>
                </div>
                <div className='text-center'>
                    <div className='process-box' ><MdOutlineDeliveryDining /></div> <br />
                    <h6>Deliver</h6>
                </div>
            </div>


        </div>
    );
};

export default OurProcess;