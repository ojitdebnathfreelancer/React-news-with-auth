import React, { useContext } from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUser, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import LeftNavBar from '../LeftNavBar/LeftNavBar';
import Button from 'react-bootstrap/Button';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    // console.log(user);

    const hendelLogOut = () => {
        logOut()
            .then(result => { })
            .catch(error => console.error(error))
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand as={Link} to="/">React News</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <div className='d-lg-none'>
                            <LeftNavBar></LeftNavBar>
                        </div>
                    </Nav>
                    <Nav className='d-flex align-items-center'>
                        <div className='d-flex align-items-center'>
                            {
                                user?.uid ?
                                    <>
                                        <Button onClick={hendelLogOut} className='me-3' variant="outline-dark">Sign Out</Button>
                                        <Link title='Profile' className='text-decoration-none' to='/profile'>
                                            <p className='text-black mb-0 me-3 fs-5'>{user?.displayName}</p>
                                        </Link>
                                    </>
                                    :
                                    <>
                                        <Link className='text-decoration-none fs-5 fw-bold text-black me-3' to="/register">Sign Up</Link>
                                        <Link className='text-decoration-none fs-5 fw-bold text-black me-3' to="/login">Sign In</Link>
                                    </>
                            }
                            {
                                user?.photoURL ? <Image roundedCircle width={40} src={user?.photoURL}></Image> : <FaUser></FaUser>
                            }
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;