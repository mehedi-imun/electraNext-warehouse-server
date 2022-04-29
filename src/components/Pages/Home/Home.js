import React from 'react';
import PageTitle from '../../Shared/PageTittle/PageTitle';
import Banner from './Banner/Banner';
import InventoryItems from './InventoryItems/InventoryItems';

const Home = () => {
    return (
        <div>
            <PageTitle title='Home'></PageTitle>
            <Banner></Banner>
            <InventoryItems></InventoryItems>
            
        </div>
    );
};

export default Home;