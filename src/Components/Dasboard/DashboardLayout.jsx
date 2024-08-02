import React from 'react'
import Sidebar from './Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'
import useRole from '../../Hooks/useRole/useRole'

export default function DashboardLayout() {
    const user = useRole();
    const role = user?.role;
    return (
        <div>
            {/* Sidebar for dashboard */}
            <div>
                <Sidebar role={role} />
            </div>
            {/* Contents through sidebar */}
            <div>
                <Outlet />
            </div>
        </div>
    )
}
