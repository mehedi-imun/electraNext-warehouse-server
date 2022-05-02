import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services,setServices]=useState([])
    useEffect(()=>{
        const getServices = async ()=>{
            const url = `https://secure-sands-19636.herokuapp.com/service/`
            const {data} = await axios.get(url)
            setServices(data)
        }
        getServices()
    },[])
    return (
        <div className='service-body'>
            <h3 className='text-center my-3 py-3'> Our services</h3>
            <div className='grid row service-container mx-auto gx-2 gy-3'>
                {
                    services.map(service=> <ServiceCard
                    key={service._id}
                    service={service}
                    >
                    </ServiceCard>)
                }
            </div>
            
        </div>
    );
};

export default Services;