import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Inventory = () => {
    const {id}= useParams()
    const [item,setItem]=useState({})
    useEffect(()=>{
        const url = `http://localhost:5000/product/${id}`
        fetch(url)
        .then(res=> res.json())
        .then(data=> setItem(data))
    },[id])
    
  
    return (
        <div>
            <h3>{item.name}</h3>
        </div>
    );
};

export default Inventory;