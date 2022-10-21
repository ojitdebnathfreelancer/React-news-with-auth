import React, { useContext } from 'react';
import { ButtonGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { FaGoogle, FaGithub, FaFacebook, FaWhatsapp, FaTwitter, FaTwitch, } from 'react-icons/fa';
import ListGroup from 'react-bootstrap/ListGroup';
import Slider from '../Carousel/Slider';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const RightNavBar = () => {
    const {googleSignUp} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const signWithGoogle = () =>{
        return googleSignUp()
        .then(result =>{
            navigate(from, {replace:true});
        })
        .catch(error => console.error(error))
    }

    return (
        <div>
            <ButtonGroup vertical>
                <Button onClick={signWithGoogle} className='mb-2 rounded-2' variant="outline-primary">
                    <FaGoogle /> Login With Google
                </Button>
                <Button className='rounded-2' variant="outline-dark">
                    <FaGithub /> Login With Github
                </Button>
            </ButtonGroup>
            <div className='mt-3'>
                <ListGroup>
                    <ListGroup.Item className='mb-2'>
                        <FaFacebook/> Facebook
                    </ListGroup.Item>
                    <ListGroup.Item className='mb-2'>
                        <FaWhatsapp/> WhatsApp
                    </ListGroup.Item>
                    <ListGroup.Item className='mb-2'>
                        <FaTwitter/> Twitter
                    </ListGroup.Item>
                    <ListGroup.Item className='mb-2'>
                        <FaTwitch/> Twitch
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Terms & Conditions
                    </ListGroup.Item>
                </ListGroup>
            </div>
            <div className='mt-3'>
                <Slider></Slider>
            </div>
        </div>
    );
};

export default RightNavBar;