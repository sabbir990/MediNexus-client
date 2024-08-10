import PropTypes from 'prop-types'
import PaymentManagementModal from './PaymentManagementModal'
import { useState } from 'react';

const PaymentRows = ({ payment, refetch }) => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <tr className='font-poppins font-bold'>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <div className='flex items-center'>
          <div className='ml-3'>
            <p className='text-gray-900 whitespace-no-wrap'>{payment?.itemName}</p>
          </div>
        </div>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <div className='flex items-center'>
          <div className='ml-3'>
            <p className='text-gray-900 whitespace-no-wrap'>
              {payment?.userEmail}
            </p>
          </div>
        </div>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>${payment?.perUnitPrice}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>
          {payment?.paid_total}
        </p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <span className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'>
          <span
            aria-hidden='true'
            className='absolute inset-0 bg-red-200 opacity-50 rounded-full'
          ></span>
          <span className={`relative ${payment?.status === 'pending' ? 'text-red-600' : 'text-green-500'}`}>{payment?.status}</span>
        </span>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>
          <button className='btn btn-success hover:btn-outline text-white' onClick={() => setIsOpen(true)} disabled={payment?.status === 'paid'}>Accept Payment</button>
          <PaymentManagementModal isOpen={isOpen} setIsOpen={setIsOpen} refetch={refetch} _id={payment?._id} />
        </p>
      </td>
    </tr>
  )
}

PaymentRows.propTypes = {
  booking: PropTypes.object,
  refetch: PropTypes.func,
}

export default PaymentRows