import React, { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import PageTitle from '../../Shared/PageTittle/PageTitle';

const Inventory = () => {
    const { id } = useParams()
    const [item, setItem] = useState({})
    const { img, description, price, quantity, supplier, name } = item;
    useEffect(() => {
        const url = `http://localhost:5000/product/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data))
    }, []);

    // increase quantity

    const handleDelivered = (updatedQuantity) => {
        const newQuantity = updatedQuantity - 1
        const url = `http://localhost:5000/item/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ newQuantity }),
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount >= 1) {
                    fetch(`http://localhost:5000/product/${id}`)
                        .then(res => res.json())
                        .then(data => setItem(data))
                }
            })
    }
    // add more quantity
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        const quantityInput = data.quantity;
        const newQuantity = parseInt(quantityInput) + quantity;
        const url = `http://localhost:5000/item/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ newQuantity }),
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount >= 1) {
                    fetch(`http://localhost:5000/product/${id}`)
                        .then(res => res.json())
                        .then(data => setItem(data))
                }
            })
    };

    return (
        <div>
            <PageTitle title='inventory'></PageTitle>
            <div className='mt-5'>
                <div style={{ marginBottom: '50px' }} className='card-body d-flex justify-content-center '>
                    <div className="card">
                        <div className="imgBox">
                            <img src={img} alt="" />
                        </div>
                        <div className="content">
                            <div className="details">
                                <h2>{name?.slice(0, 20)}</h2>
                                <p>{description?.slice(0, 100)}</p>
                                <div className="data">
                                    <h3>$ {price} <br /> <span>Price</span></h3>
                                    <h3>{quantity} <br /> <span>quantity</span></h3>
                                    <h3>{supplier} <br /> <span>supplier</span></h3>
                                </div>
                                <div className="action-btn">
                                    <button onClick={() => handleDelivered(quantity)} >delivered</button>
                                </div>
                            </div>
                        </div>


                    </div>

                </div>
            </div>
            <div className='mt-5 mb-5'>
                <h4 className='text-center my-5'>Add Quantity this item </h4>
                <form className='d-flex flex-column mt-2 w-75 mx-auto align-items-center' onSubmit={handleSubmit(onSubmit)}>
                    <input
                        className='mb-3  p-1 input-felid'
                        type='number'
                        {...register("quantity", { required: true })}
                        placeholder='add more quantity'

                    />
                    <input type="submit" value='add Quantity' className='login-btn input-felid' />
                </form>
            </div>
        </div>
    );
};

export default Inventory;