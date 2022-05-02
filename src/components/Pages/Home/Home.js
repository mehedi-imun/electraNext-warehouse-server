import React from 'react';
import PageTitle from '../../Shared/PageTittle/PageTitle';
import Banner from './Banner/Banner';
import InventoryItems from './InventoryItems/InventoryItems';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <PageTitle title='Home'></PageTitle>
            <Banner></Banner>
            <InventoryItems></InventoryItems>
            <Services></Services>
            
        </div>
    );
};

export default Home;