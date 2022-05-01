import React from 'react';
import { useNavigate } from 'react-router-dom';
import PageTitle from '../../Shared/PageTittle/PageTitle';
import './NotFoundPage.css'
const NotFoundPage = () => {
    const navigate = useNavigate()
    return (
        <div>
            <PageTitle title='404'></PageTitle>
            <div className='notFoundBody'>
                <div  className='text-center '>
                    <button 
                    onClick={()=>navigate('/')}
                    className=' btn btn-warning mt-5'>Go Home</button>
                </div>


            </div>
        </div>
    );
};

export default NotFoundPage;