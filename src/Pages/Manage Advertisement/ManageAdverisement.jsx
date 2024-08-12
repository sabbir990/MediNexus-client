import React from 'react'
import { Helmet } from 'react-helmet-async'
import Logo from '../../Components/Logo/Logo'
import useAxiosSecure from '../../Hooks/useAxiosSecure/useAxiosSecure'
import { useQuery } from '@tanstack/react-query';
import ManageAdvertisementRow from './ManageAdvertiseRow';

export default function ManageAdverisement() {
    const axiosSecure = useAxiosSecure();

    const {data : advertisementRequests = [], isLoading, refetch} = useQuery({
        queryKey : ['advertisementRequest'],
        queryFn : async() => {
            const {data} = await axiosSecure.get('/all-advertisements');
            return data
        }
    })

    return (
        <div>
            <Helmet>
                <title>Manage Advertisement</title>
            </Helmet>
            <div className='flex flex-col items-center mt-8'>
                <Logo />
                <div className='text-center mt-4 font-poppins'>
                    <h1 className='font-bold text-2xl'>Manage Item Advertisements</h1>
                    <p className='text-gray-500'>Review, Edit, and Track the Performance of Seller Campaigns</p>
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
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-center text-sm uppercase font-normal'
                                        >
                                            Title
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
                                            Company
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                        >
                                            Requested From
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
                                            Status
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 text-center bg-white  border-b border-gray-200 text-gray-800 text-sm uppercase font-normal'
                                        >
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        advertisementRequests?.map((advertisement, index) => {
                                            return <ManageAdvertisementRow key={index} advertisement={advertisement}  refetch={refetch}/>
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
