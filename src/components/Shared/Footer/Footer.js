import React from 'react';
import logo from '../../../images/logo.png'
import './Footer.css'
import {
    FaGithub, FaLinkedin, FaPhone,
    FaMailBulk, FaAddressCard, FaFacebook, FaStackOverflow, FaDribbble
} from 'react-icons/fa';
// import { Link, NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
            <div className='footer text-white'>
                <div className='grid row container mx-auto mt-5'>
                    <div className=' col-md-4 col-12'>
                        <div className='d-flex flex-column align-items-start justify-content-center'>
                            <img style={{ width: '140px' }} src={logo} alt="" />
                            <p className='my-3 '>ElectraNext Warehouse Outlet on New marketplace. Get the best deals with fast shipping and top-rated customer service.</p>
                        </div>
                        <Nav className='d-flex justify-content-start socialItem '>
                            <Nav.Link to='/' as={Link} >
                                <FaGithub
                                    style={{ color: '#fff' }}
                                    className='fs-2'></FaGithub>
                            </Nav.Link>
                            <Nav.Link to='/' as={Link} >
                                <FaLinkedin
                                    style={{ color: '#fff' }}
                                    className='fs-2'></FaLinkedin>
                            </Nav.Link>
                            <Nav.Link to='/' as={Link} >
                                <FaFacebook
                                    style={{ color: '#fff' }}
                                    className='fs-2'></FaFacebook>
                            </Nav.Link>
                            <Nav.Link to='/' as={Link} >
                                <FaStackOverflow
                                    style={{ color: '#fff' }}
                                    className='fs-2'></FaStackOverflow>
                            </Nav.Link>
                            <Nav.Link to='/' >

                                <FaDribbble
                                    style={{ color: '#fff' }}
                                    className='fs-2 '></FaDribbble>
                            </Nav.Link>
                        </Nav>

                    </div>
                    <div className='col-md-2 col-12 '>
                        <h4>Explore</h4>
                        <Nav className='d-flex flex-column navItem'>
                            <Nav.Link style={{ color: '#BEBEBE' }} as={Link} className=' navLink m-0 p-0 ' to='/'>Home</Nav.Link>
                            <Nav.Link style={{ color: '#BEBEBE' }} as={Link} className=' navLink m-0 p-0 ' to='/blog'>Blog</Nav.Link>
                            <Nav.Link style={{ color: '#BEBEBE' }} as={Link} className=' navLink m-0 p-0 ' to='/manageInventories'>Manage item</Nav.Link>
                            <Nav.Link style={{ color: '#BEBEBE' }} as={Link} className=' navLink m-0 p-0 ' to='/additem'>Add item</Nav.Link>
                            <Nav.Link style={{ color: '#BEBEBE' }} as={Link} className=' navLink m-0 p-0 ' to='/myitems'>My items</Nav.Link>
                        </Nav>
                    </div>
                    <div className='col-md-4 col-12 '>
                        <h4 className=''>Contact</h4>
                        <div>
                            <address>
                                <span><FaAddressCard></FaAddressCard> </span>
                                Ramgonj, Lakshmipur , Chittagong
                            </address>
                            <address>
                                <span><FaMailBulk /> </span>
                                mahediimun@gmail.com
                            </address>
                            <address>
                                <span><FaPhone /> </span>
                                01611846448
                            </address>
                        </div>


                    </div>
                    <div className='col-md-2 col-12 d-flex flex-column align-items-end'>
                        <h4>Legal</h4>
                        <Nav className='d-flex flex-column align-items-end navItem'>
                            <Nav.Link style={{ color: '#BEBEBE' }} as={Link} className=' navLink m-0 p-0 ' to='/'>Privacy Policy</Nav.Link>
                            <Nav.Link style={{ color: '#BEBEBE' }} as={Link} className=' navLink m-0 p-0 ' to='/'>Terms & Conditions</Nav.Link>
                        </Nav>
                    </div>
                </div>

                <div>
                    <hr className='w-100' />
                    <p className='text-center  '>
                        &copy; Copyright ElectraNext {year} All rights reserved.</p>
                </div>
            </div>
    );
};

export default Footer;