import React from 'react'
import { Helmet } from 'react-helmet-async'
import Logo from '../../Components/Logo/Logo'
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../Hooks/useAuth/useAuth';
import UserHomepageRow from './UserHomepageRow';
import useAxiosSecure from '../../Hooks/useAxiosSecure/useAxiosSecure';

export default function UserHomepage() {
    const {user} = useAuth()
    const axiosSecure = useAxiosSecure();

    const {data : payments = []} = useQuery({
        queryKey : ['payment-user'],
        queryFn : async() => {
            const {data} = await axiosSecure.get(`/dashboard-user/${user?.email}`);
            return data;
        }
    })

    
    return (
        <div>
            <Helmet>
                <title>Payment History</title>
            </Helmet>
            <div className='flex flex-col items-center mt-8'>
                <Logo />
                <div className='text-center mt-4 font-poppins'>
                    <h1 className='font-bold text-2xl'>Payment History</h1>
                    <p className='text-gray-500'>Track Your Transactions and Payment Details in Medinexus</p>
                </div>
            </div>


            <div className='container mx-auto px-4 sm:px-8'>
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
                                            Medicine Name
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                        >
                                            Seller
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                        >
                                            Transaction
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                        >
                                            Transaction Date
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                        >
                                            Transaction Time
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                        >
                                            Quantity
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        payments?.map((payment, index) => {
                                            return <UserHomepageRow payment={payment} key={index} />
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
