import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import ManageInventoriesCard from './ManageInventoriesCard';
import { IoMdAddCircleOutline } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
const ManageInventories = () => {
    const navigate = useNavigate()
    const [items, setItems] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
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
            <h5 className='text-center mt-3'>manage all  items</h5>
            <p className='text-center'> Total product:{items.length}</p>
            <div className='text-center '>
                <button 
                    onClick={()=>navigate('/addItem')}
                    style={{ backgroundColor: '#ff9900', 
                    fontWeight: '500' }}
                    className='btn border text-white'>
                    Add item
                    <IoMdAddCircleOutline className='fs-4 ms-2'></IoMdAddCircleOutline>

                </button>
            </div>
            <div className='d-flex flex-wrap container justify-content-around '>
                {
                    items.map(item => <ManageInventoriesCard
                        key={item._id}
                        item={item}
                        handleDeleteItem={handleDeleteItem}
                    >
                    </ManageInventoriesCard>)
                }
            </div>
        </div>
    );
};

export default ManageInventories;