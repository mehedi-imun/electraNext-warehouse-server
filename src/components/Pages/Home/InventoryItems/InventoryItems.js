import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ItemsCard from './ItemsCard';
const InventoryItems = () => {
    const [items, setItems] = useState([])
    useEffect(() => {
        const getItems = async ()=>{
            const url = `http://localhost:5000/myitems`
            const {data} = await axios.get(url)
            setItems(data)
        }
        getItems()
    }, [])
    const sliceItems = items?.slice(0,6)
    return (
        <div>
            <h4 className='text-center my-3'>Inventory Items</h4>
            <div className='d-flex flex-wrap justify-content-between mt-5'>
                {
                    sliceItems.map(item => <ItemsCard
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