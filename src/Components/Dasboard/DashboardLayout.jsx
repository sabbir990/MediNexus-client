import React from 'react'
import Sidebar from './Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'
import useRole from '../../Hooks/useRole/useRole'

export default function DashboardLayout() {
    const role = useRole();
    return (
        <div>
            {/* Sidebar for dashboard */}
            <div className='flex-1'>
                <Sidebar role={role} />
            </div>
            {/* Contents through sidebar */}
            <div className='lg:ml-72'>
                <Outlet />
            </div>
        </div>
    )
}
