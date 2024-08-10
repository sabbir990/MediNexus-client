import React from 'react'
import { Helmet } from 'react-helmet-async'
import Logo from '../../Components/Logo/Logo'
import useAxiosSecure from '../../Hooks/useAxiosSecure/useAxiosSecure'
import { useQuery } from '@tanstack/react-query';
import PaymentRows from './PaymentRows';

export default function PaymentManagement() {
    const axiosSecure = useAxiosSecure();

    const {data : payments = [], isLoading, refetch} = useQuery({
        queryKey : ['payments'],
        queryFn : async() => {
            const {data} = await axiosSecure.get('/payments');
            return data;
        }
    })
    
    console.log(payments);
    return (
        <>
            <Helmet>
                <title>Payment Management</title>
            </Helmet>

            <div className='container mx-auto px-4 sm:px-8'>
                <div className='flex flex-col items-center mt-8'>
                    <Logo />
                    <div className='text-center mt-4 font-poppins'>
                        <h1 className='font-bold text-2xl'>Payment Management</h1>
                        <p className='text-gray-500'>Monitor and Manage All Payment Transactions Effortlessly</p>
                    </div>
                </div>

                <div className='py-8'>
                    <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
                        <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
                            <table className='min-w-full leading-normal'>
                                <thead>
                                    <tr>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                        >
                                            Title
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                        >
                                            Guest Info
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                        >
                                            Price
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
                                            Payment Status
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                        >
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>{/* Table row data */}
                                    {
                                        payments?.map((payment, index) => {
                                            return <PaymentRows key={index} payment={payment} refetch={refetch} />
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
