import PropTypes from 'prop-types'

const SalesReportRow = ({ payment }) => {
  return (
    <tr>
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
              {payment?.sellerEmail}
            </p>
          </div>
        </div>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <div className='flex items-center'>
          <div className='ml-3'>
            <p className='text-gray-900 whitespace-no-wrap'>
              {payment?.buyerEmail}
            </p>
          </div>
        </div>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>${payment?.paid_total}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>
          {payment?.quantity ? payment.quantity + 1 : 1}
        </p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>
          {new Date(payment?.date).toLocaleDateString()}
        </p>
      </td>
      {/* <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <span className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'>
          <span
            aria-hidden='true'
            className='absolute inset-0 bg-red-200 opacity-50 rounded-full'
          ></span>
          <span className='relative'>Cancel</span>
        </span>
      </td> */}
    </tr>
  )
}

SalesReportRow.propTypes = {
  booking: PropTypes.object,
  refetch: PropTypes.func,
}

export default SalesReportRow