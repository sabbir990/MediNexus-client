import React from 'react'
import Logo from '../../Components/Logo/Logo'

export default function RandomRoute() {
    return (
        <div className='w-full h-screen flex items-center justify-center'>
            <div className='flex flex-col items-center mt-8'>
                <Logo />
                <div className='text-center mt-4 font-poppins'>
                    <h1 className='font-bold text-2xl'>Welcome to Medinexus</h1>
                    <p className='text-gray-500'>Click Any Section to Navigate to know more</p>
                </div>
            </div>
        </div>
    )
}
