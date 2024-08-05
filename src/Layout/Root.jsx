import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'

export default function Root() {
  return (
    <div>
      {/* Navbar */}

      <div>
        <Navbar />
      </div>

      {/* Outlet */}

      <div className='px-6'>
        <Outlet />
      </div>
    </div>
  )
}
