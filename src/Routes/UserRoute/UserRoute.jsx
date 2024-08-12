import React from 'react'
import useRole from '../../Hooks/useRole/useRole'
import useAuth from '../../Hooks/useAuth/useAuth'
import { useNavigate } from 'react-router-dom';

export default function UserRoute({children}) {
    const {role, isLoading} = useRole()
    const {logOut} = useAuth();
    const navigate = useNavigate();

    if(isLoading){
        return <div className='w-screen h-screen flex justify-center items-center'>
            <span className="loading loading-spinner loading-lg"></span>
        </div>
    }

    if(role !== 'user'){
        logOut();
        navigate('/login', {
            state : location.pathname
        })
    }
  return children
}
