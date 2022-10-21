import { getAuth, sendEmailVerification } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import app from '../../Firebase/Firebase.config';
import toast, {Toaster} from 'react-hot-toast';

const auth = getAuth(app);

const Register = () => {
    const { createUser, updateUser } = useContext(AuthContext);

    const [accept, setAccept] = useState(false);
    const navigate = useNavigate();

    const handelSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const picture = form.photoURL.value;
        const password = form.password.value;
        // console.log(name, email, picture, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                form.reset();
                veryfiyemail();
                handelUpdateUser(name,picture);
                navigate('/');
            })
            .catch(error => console.error(error));
    }
    // register handel 

    const veryfiyemail = () =>{
        sendEmailVerification(auth.currentUser)
        .then(()=>{
            toast.success('Please verify your email.')
        })
        .catch(error => console.error(error));
    }

    const handelUpdateUser = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        };

        updateUser(profile)
            .then(() => {})
            .catch(error => console.error(error));
    }
    // update profile 

    const handelAccept = (event) => {
        setAccept(event.target.checked)
    }

    return (
        <div>
            <Form onSubmit={handelSubmit}>
                <Form.Group className="mb-2" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter name" required />
                </Form.Group>

                <Form.Group className="mb-2" controlId="formBasicImg">
                    <Form.Label>Img URL</Form.Label>
                    <Form.Control type="text" name='photoURL' placeholder="Enter image url" required />
                </Form.Group>

                <Form.Group className="mb-2" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email"
                        name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-2" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password"
                        name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" onClick={handelAccept}
                        label={<Link to='/trem' className='text-decoration-none'>Trem & Conditions</Link>} />
                </Form.Group>
                <Button variant="primary" type="submit" disabled={!accept}>
                    Sign Up
                </Button>
            </Form>
        </div>
    );
};

export default Register;