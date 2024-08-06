import React from 'react'
import { FaSquarePlus } from "react-icons/fa6";


export default function ReasonCards({icon : Icon, heading, description, color}) {
  return (
    <div className={`p-8 rounded-lg space-y-4 ${color}`}>
        <div className='bg-white p-4 flex items-center justify-center rounded-full'>
            <Icon className='text-2xl' />
        </div>
        <div>
            <h1 className='text-xl font-bold font-poppins'>{heading}</h1>
        </div>
        <div>
            <p className='font-poppins text-gray-700'>{description}</p>
        </div>
    </div>
  )
}
