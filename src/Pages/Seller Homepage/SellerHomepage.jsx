import { FaDollarSign } from 'react-icons/fa'
import { BsFillCartPlusFill } from 'react-icons/bs'
import { MdOutlinePendingActions } from 'react-icons/md'
import useAxiosSecure from '../../Hooks/useAxiosSecure/useAxiosSecure'
import { useQuery } from '@tanstack/react-query'
import useAuth from '../../Hooks/useAuth/useAuth'
import { PieChart } from '../../Components/Chart/AdminChart'

const SellerHomepage = () => {
    const axiosSecure = useAxiosSecure();
    const {user} = useAuth()

    const {data : paymentDetails = []} = useQuery({
        queryKey : ['payment-seller'],
        queryFn : async() => {
            const {data} = await axiosSecure.get(`/seller-dashboard/${user?.email}`);
            return data
        }
    })

    return (
        <div>
            <div className='mt-12 p-4'>
                {/* small cards */}
                <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 mb-10'>
                    {/* Sales Card */}
                    <div className='relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md'>
                        <div
                            className={`bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center from-orange-600 to-orange-400 text-white shadow-orange-500/40`}
                        >
                            <FaDollarSign className='w-6 h-6 text-white' />
                        </div>
                        <div className='p-4 text-right'>
                            <p className='block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600'>
                                Total Sales
                            </p>
                            <h4 className='block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900'>
                                ${paymentDetails?.total}
                            </h4>
                        </div>
                    </div>
                    {/* Users Card */}
                    <div className='relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md'>
                        <div
                            className={`bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center from-green-600 to-green-400 text-white shadow-green-500/40`}
                        >
                            <MdOutlinePendingActions className='w-6 h-6 text-white' />
                        </div>
                        <div className='p-4 text-right'>
                            <p className='block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600'>
                                Pending Total
                            </p>
                            <h4 className='block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900'>
                                ${paymentDetails?.pendingTotal}
                            </h4>
                        </div>
                    </div>
                    {/* Total Bookings */}
                    <div className='relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md'>
                        <div
                            className={`bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center from-blue-600 to-blue-400 text-white shadow-blue-500/40`}
                        >
                            <BsFillCartPlusFill className='w-6 h-6 text-white' />
                        </div>
                        <div className='p-4 text-right'>
                            <p className='block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600'>
                                Paid Total
                            </p>
                            <h4 className='block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900'>
                                ${paymentDetails?.paidTotal}
                            </h4>
                        </div>
                    </div>
                </div>

                <div className='w-full h-full border rounded-lg shadow-lg p-8 m-auto'>
                    <PieChart data={paymentDetails?.categorySpecification} title={"Sales By Category"} />
                </div>
            </div>
        </div>
    )
}

export default SellerHomepage