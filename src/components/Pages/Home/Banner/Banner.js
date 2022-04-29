import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../../images/banner/banner1.png'
import banner2 from '../../../../images/banner/banner2.png'
import banner3 from '../../../../images/banner/banner3.png'

const Banner = () => {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>warehouses where they receive, unpack, arrange</h3>
                    <p>Warehouses play a key role in the supply chain. A lean, efficient warehouse keeps businesses running efficiently; therefore, warehouse organization can make or break a business’ bottom line. .</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3> Completes shipments by processing and loading orders.</h3>
                    <p>Order processing is the process or work-flow associated with the picking, packing and delivery of the packed items to a shipping carrier and is a key element of order fulfillment. Order processing operations or facilities are commonly called "distribution centers" or "DC's"</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner3}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Warehouse Worker Duties and Responsibilities</h3>
                    <p>Collecting merchandise from the distribution center and safely transporting materials to the shipping bay.Receiving and documenting merchandise for delivery or return..</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;