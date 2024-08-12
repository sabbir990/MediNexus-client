import React from 'react'
import useAuth from '../../Hooks/useAuth/useAuth'
import { ImSpinner9 } from "react-icons/im";
import { Navigate, useLocation } from 'react-router-dom';


export default function PrivateRoute({ children }) {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <div className='w-full h-screen flex items-center justify-center'>
      <span className="loading loading-spinner loading-lg"></span>
    </div>
  }

  if (user) {
    return children
  }
  return (
    <Navigate to={'/login'} state={location.pathname} />
  )
}
