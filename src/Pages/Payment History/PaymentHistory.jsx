import React from 'react'
import { Helmet } from 'react-helmet-async'
import Logo from '../../Components/Logo/Logo'
import useAxiosSecure from '../../Hooks/useAxiosSecure/useAxiosSecure'
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../Hooks/useAuth/useAuth';
import PaymentHistoryRow from './PaymentHistoryRow';

export default function PaymentHistory() {
    const axiosSecure = useAxiosSecure();
    const {user} = useAuth()

    const {data : payments = []} = useQuery({
        queryKey : ['payments'],
        queryFn : async() => {
            const {data} = await axiosSecure.get(`/payments/${user?.email}`);
            return data;
        }
    })

    console.log(payments)
    return (
        <div>
            <div className='container mx-auto px-4 sm:px-8'>
                <Helmet>
                    <title>Payment History</title>
                </Helmet>

                <div className='flex flex-col items-center mt-8'>
                    <Logo />
                    <div className='text-center mt-4 font-poppins'>
                        <h1 className='font-bold text-2xl'>Sales Report</h1>
                        <p className='text-gray-500'>Analyze and track your sales performance with detailed reports and insights.</p>
                    </div>
                </div>

                <div className='py-8 font-poppins'>
                    <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
                        <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
                            <table className='min-w-full leading-normal'>
                                <thead>
                                    <tr>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                        >
                                            Medicine Name
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                        >
                                            Category
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                        >
                                            Sold Date
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                        >
                                            Quantity
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                        >
                                            Paid Total
                                        </th>

                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                        >
                                            Status
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>{/* User data table row */}
                                    {
                                        payments?.map((payment, index) => {
                                            return <PaymentHistoryRow key={index} payment={payment} />
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
