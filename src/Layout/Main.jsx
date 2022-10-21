import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';
import LeftNavBar from '../Components/LeftNavBar/LeftNavBar';
import RightNavBar from '../Components/RightNavBar/RightNavBar';
import './Main.css';

const Main = () => {
    return (
        <div className='main'>
            <div className='mb-3'>
                <Header></Header>
            </div>
            <Container>
                <Row>
                    <Col lg='2' className='d-none d-lg-block'>
                        <LeftNavBar></LeftNavBar>
                    </Col>
                    <Col lg='7'>
                        <Outlet></Outlet>
                    </Col>
                    <Col lg='3'>
                        <RightNavBar></RightNavBar>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;