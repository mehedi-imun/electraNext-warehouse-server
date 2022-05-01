import React from 'react';
import { Spinner } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../Firebase.init';

const RequireAuth = ({children}) => {
    const location = useLocation()

    const [user, loading] = useAuthState(auth);
    if (loading) {
        return <div className='d-flex justify-content-center align-items-center mt-5'> <Spinner animation="grow" /></div>
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children
};

export default RequireAuth;