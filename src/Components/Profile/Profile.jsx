import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Profile = () => {
    const {user} = useContext(AuthContext);
    const [name, setName] = useState(user.displayName);

    const handleProfile = (event) =>{
        event.preventDefault();
    }
    console.log(name);
    const handelName = (event) =>{
        setName(event.target.value);
    }

    return (
        <div>
            <Form onSubmit={handleProfile}>
            <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control onChange={handelName} defaultValue={name} type="name" placeholder="Enter name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control defaultValue={user.email} type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPhoto">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control defaultValue={user.photoURL} type="text" placeholder="photoURL" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default Profile;