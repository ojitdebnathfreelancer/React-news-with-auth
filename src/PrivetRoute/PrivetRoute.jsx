import React, { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const PrivetRoute = ({ children }) => {
    const location = useLocation();

    const { user, loadin } = useContext(AuthContext);

    if (loadin) {
        return <div className='h-100 d-flex align-items-center justify-content-center'>
            <Spinner animation="grow" variant="success" />
        </div>
    }

    if (user?.uid) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default PrivetRoute;