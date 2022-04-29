import React, { useEffect, useState } from 'react';
import ItemsCard from './ItemsCard';
const axios = require('axios');
const InventoryItems = () => {
    const [items, setItems] = useState([])
    useEffect(() => {
       fetch('http://localhost:5000/products')
       .then(res => res.json())
       .then(data => setItems(data))
    }, [])
    const cItems = items.slice(0,6)
    return (
        <div>
            <h4 className='text-center my-5'>Inventory Items</h4>
            <div className='d-flex flex-wrap justify-content-between mt-5'>
                {
                    cItems.map(item => <ItemsCard
                    key={item._id}
                    item={item}
                    >
                    </ItemsCard>)
                }
            </div>

        </div>
    );
};

export default InventoryItems;