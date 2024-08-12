import React, { useState } from 'react'
import AdvertisementRequestModal from './AdvertisementRequestModal'

export default function AskForAdvertisementRow({ medicine, refetch }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <tr>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <div className='flex items-center'>
                    <div className='flex-shrink-0'>
                        <div className='block relative'>
                            <img
                                alt='profile'
                                src={medicine?.itemImage}
                                className='mx-auto object-cover rounded h-10 w-15 '
                            />
                        </div>
                    </div>
                    <div className='ml-3'>
                        <p className='text-gray-900 whitespace-no-wrap font-bold'>{medicine?.itemName}</p>
                    </div>
                </div>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <div className='flex items-center'>
                    <div className='ml-3'>
                        <p className='text-gray-900 whitespace-no-wrap'>
                            {medicine?.category}
                        </p>
                    </div>
                </div>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>${medicine?.perUnitPrice}</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>
                    {medicine?.company}
                </p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <button className='btn btn-success hover:btn-outline text-white' onClick={() => setIsOpen(true)}>Request</button>
                <AdvertisementRequestModal isOpen={isOpen} setIsOpen={setIsOpen} refetch={refetch} medicine={medicine} />
            </td>
        </tr>
    )
}
