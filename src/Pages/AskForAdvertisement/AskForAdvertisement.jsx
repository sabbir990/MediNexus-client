import React from 'react'
import Logo from '../../Components/Logo/Logo'
import useAxiosSecure from '../../Hooks/useAxiosSecure/useAxiosSecure'
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../Hooks/useAuth/useAuth';
import AskForAdvertisementRow from './AskForAdvertisementRow';

export default function AskForAdvertisement() {
    const axiosSecure = useAxiosSecure();
    const {user} = useAuth();

    const {data : medicines = [], isLoading, refetch} = useQuery({
        queryKey : ['medicineForAdvertisement'],
        queryFn : async() => {
            const {data} = await axiosSecure.get(`/advertisement-medicines/${user?.email}`);
            return data
        }
    })

    return (
        <div>
            <div className='flex flex-col items-center mt-8'>
                <Logo />
                <div className='text-center mt-4 font-poppins'>
                    <h1 className='font-bold text-2xl'>Request an Advertisement</h1>
                    <p className='text-gray-500'>Promote Your Products and Services with Medinexus</p>
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
                                            Price Per Unit
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
                                            Request
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>{/* Table row data */}
                                    {
                                        medicines?.map((medicine, index) => {
                                            return <AskForAdvertisementRow key={index} medicine={medicine} refetch={refetch} />
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
