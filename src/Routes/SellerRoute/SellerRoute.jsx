import React from 'react'
import useAuth from '../../Hooks/useAuth/useAuth';
import useRole from '../../Hooks/useRole/useRole';
import { useLocation, useNavigate } from 'react-router-dom';

export default function SellerRoute({children}) {
    const {logOut} = useAuth()
    const {role, isLoading} = useRole();
    const location = useLocation();
    const navigate = useNavigate()

    if(isLoading){
        return <div className='w-full h-screen flex items-center justify-center'>
            <span className="loading loading-spinner loading-lg"></span>
        </div>
    }

    if(role !== 'seller'){
        logOut();
        navigate('/login', {
            state : location.pathname
        })
    }

    else{
        return children
    }
}
