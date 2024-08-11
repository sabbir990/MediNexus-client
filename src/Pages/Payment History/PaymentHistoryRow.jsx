import React from 'react'

export default function PaymentHistoryRow({ payment }) {
    return (
        <tr>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>{payment?.itemName}</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>{payment?.category}</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>{payment?.date}</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>{payment?.quantity ? payment.quantity + 1 : 1}</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>{payment?.paid_total}</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <span className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'>
                    <span
                        aria-hidden='true'
                        className={`absolute inset-0 ${payment?.status==='paid' ? 'bg-green-200' : 'bg-red-200'} opacity-50 rounded-full`}
                    ></span>
                    <span className={`relative ${payment?.status === 'pending' ? 'text-red-600' : 'text-green-500'}`}>{payment?.status}</span>
                </span>
            </td>
        </tr>
    )
}
