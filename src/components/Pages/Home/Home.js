import React from 'react';
import PageTitle from '../../Shared/PageTittle/PageTitle';
import Banner from './Banner/Banner';
import InventoryItems from './InventoryItems/InventoryItems';
import OurProcess from './OurProcess/OurProcess';
import Services from './Services/Services';
import WhyChooseUs from './WhyChooseUs/WhyChooseUs';

const Home = () => {
    return (
        <div>
            <PageTitle title='Home'></PageTitle>
            <Banner></Banner>
            <InventoryItems></InventoryItems>
            <Services></Services>
            <WhyChooseUs></WhyChooseUs>
            <OurProcess></OurProcess>
            
        </div>
    );
};

export default Home;