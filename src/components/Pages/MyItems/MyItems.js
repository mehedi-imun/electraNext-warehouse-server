import { async } from '@firebase/util';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase.init';

const MyItems = () => {
    const [user, loading, error] = useAuthState(auth);
    const [items,setItems]=useState({});
    useEffect(()=>{
        const getMyItems = async ()=>{
            const email = user.email
            const url = `http://localhost:5000/myitems?email=${email}`
            const {data} = await axios.get(url)
            setItems(data)
        }
        getMyItems()

    },[user])
    return (
        <div>
            <h5>my item</h5>
            {items.length}
            
        </div>
    );
};

export default MyItems;