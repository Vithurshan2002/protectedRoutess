import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
    const user = useSelector((state) => state.userInfor.user);
    if(!user){
        return <Navigate to='/login'/>
    }
    return <Outlet/>
}

export default ProtectedRoute