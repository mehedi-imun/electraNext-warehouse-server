import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
// This project supports CSS Modules
import styles from './ManageInventories.module.css'
const ManageInventoriesCard = ({ item,handleDeleteItem }) => {
    const { name, img,_id } = item;
    return (
        <div>
            <div className={styles.cardContainer}>
                <div className={styles.cardDetails}>
                    <img className='cardImg m-2 img-fluid' src={img} alt="" />
                    <h4 className='cardName m-2'>{name}</h4>
                    <button 
                        onClick={()=>{handleDeleteItem(_id)}}
                        className='btn border m-2'>
                        <FaTrashAlt ></FaTrashAlt>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ManageInventoriesCard;