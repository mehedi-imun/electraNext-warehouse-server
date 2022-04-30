import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import { Link } from 'react-router-dom';
import auth from '../../../Firebase.init';
import logo from '../../../images/logo.png'
const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    return (
        <Navbar style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', backdropFilter: "blur(5px)" }} sticky='top' collapseOnSelect expand="lg" variant='light'>
            <Container>
                <Navbar.Brand as={Link} to='/'>
                    <img style={{ width: '120px' }} src={logo} alt="" />

                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto nav-link ">
                        <Nav.Link className='text-light' as={Link} to='/home' >Home</Nav.Link>
                        <Nav.Link className='text-light' as={Link} to='/blog' >Blog</Nav.Link>
                        {user && <>
                            <Nav.Link className='text-light' as={Link} to='/manageInventories' >Manage items</Nav.Link>
                            <Nav.Link className='text-light' as={Link} to='/additem' >Add item</Nav.Link>
                            <Nav.Link className='text-light' as={Link} to='/myitems' >My items</Nav.Link>
                        </>}


                    </Nav>
                    <Nav>
                        <span className='d-flex align-items-center text-white'>{user?.displayName}</span>
                        <Nav.Link as={Link} to='/login' >
                            {user ? <>
                                <button
                                    onClick={() => signOut(auth)}
                                    style={{ backgroundColor: '#FC9314', fontWeight: '600' }} className='btn text-white '> Log out</button>
                            </>
                                :
                                <button style={{ backgroundColor: '#FC9314', fontWeight: '600' }} className='btn text-white '> Log in</button>}
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;