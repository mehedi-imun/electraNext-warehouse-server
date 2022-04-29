import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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
                if(data.modifiedCount >= 1){
                    fetch(`http://localhost:5000/product/${id}`)
                        .then(res => res.json())
                        .then(data => setItem(data))
                }  
            })


    }




    return (
        <div style={{ height: '100vh' }} className='mt-5'>
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
    );
};

export default Inventory;