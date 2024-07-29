import React from 'react'
import { GiMedicines } from 'react-icons/gi'
import { Link } from 'react-router-dom'

export default function Logo() {
    return (
        <div>
            <Link to={'/'} className="font-lijeva font-bold text-3xl text-[#0394fc] flex items-center space-x-1">
                <h1>MediNexus</h1>
                <GiMedicines />
            </Link>
        </div>
    )
}
