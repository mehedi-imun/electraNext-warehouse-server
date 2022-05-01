import { async } from '@firebase/util';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Swal from 'sweetalert2';
import auth from '../../../Firebase.init';
import ManageInventoriesCard from '../ManageInventories/ManageInventoriesCard';

const MyItems = () => {
    const [user, loading, error] = useAuthState(auth);
    const [items, setItems] = useState([]);
    useEffect(() => {
        const getMyItems = async () => {
            const email = user.email
            const url = `http://localhost:5000/myitems?email=${email}`
            const { data } = await axios.get(url)
            setItems(data)
        }
        getMyItems()

    }, [user])
    const handleDeleteItem = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                const url = `http://localhost:5000/item/${id}`;
                fetch(url, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            const remainingItem = items.filter(item => item._id !== id);
                            setItems(remainingItem)
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )

                        }
                    })
            }
        })

    }
    return (
        <div>
            <h5 className='text-center my-5'>My item {items.length}</h5>
            <div className='d-flex  flex-column align-items-center ' >
                {
                    items.map(item => <ManageInventoriesCard
                        item={item}
                        key={item._id}
                        handleDeleteItem={handleDeleteItem}
                    >
                    </ManageInventoriesCard>)
                }
            </div>


        </div>
    );
};

export default MyItems;