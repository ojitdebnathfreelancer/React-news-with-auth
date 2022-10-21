import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';

const LogIn = () => {
    const { loginUser, setLoading } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const [error, setError] = useState('');

    const handelLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);

        loginUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                if (user.emailVerified) {
                    navigate(from, { replace: true });
                }
                else {
                    toast.error('Please, first verify email')
                }
            })
            .catch(error => { setError(error.message) })
            .finally(() => {
                setLoading(false);
            })

    }

    return (
        <div>
            <Form onSubmit={handelLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email"
                        name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password"
                        name='password' placeholder="Password" required />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Log In
                </Button>
                <Form.Text className="text-muted ms-3">
                    <span className='text-danger'>
                        {error}
                    </span>
                </Form.Text>
            </Form>
        </div>
    );
};

export default LogIn;