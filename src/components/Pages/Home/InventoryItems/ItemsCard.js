import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ItemsCard.css'
const ItemsCard = ({item}) => {
    const navigate= useNavigate()
    const {img,description,price,quantity,supplier,name,_id}=item
    return (
        <div style={{marginBottom:'50px'}} className='card-body d-flex justify-content-center '>
            <div className="card">
                <div className="imgBox">
                    <img  src={img} alt="" />
                </div>
                <div className="content">
                    <div className="details">
                        <h2>{name.slice(0,20)}</h2>
                        <p>{description.slice(0,100)}</p>
                        <div className="data">
                            <h3>$ {price} <br /> <span>Price</span></h3>
                            <h3>{quantity} <br /> <span>quantity</span></h3>
                            <h3>{supplier} <br /> <span>supplier</span></h3>
                        </div>
                        <div className="action-btn">
                            <button onClick={()=>navigate(`/inventory/${_id}`)}>update</button>
                        </div>
                    </div>
                </div>


            </div>
            
        </div>
    );
};

export default ItemsCard;