import { useQuery } from '@tanstack/react-query'
import React from 'react'
import useAxiosCommon from '../../Hooks/useAxiosCommon/useAxiosCommon'
import useAuth from '../../Hooks/useAuth/useAuth'
import CartRows from './CartRows'

export default function CartPage() {
    const {user} = useAuth()
    const axiosCommon = useAxiosCommon()
    const {data : cartItems = [], isLoading, refetch} = useQuery({
        queryKey : ['cartItems', user?.email],
        queryFn : async() => {
            const {data} = await axiosCommon.get(`/cart/${user?.email}`);
            return data
        }
    })

    console.log(cartItems)

    
    return (
        <div className='mt-5'>
            <div className='text-center font-poppins'>
                <h1 className='font-bold text-2xl'>Your Cart</h1>
                <p className='text-gray-500'>Review and manage your selected medicines before checkout.</p>
                <div className='w-48 h-1 bg-yellow-500 mx-auto mt-1'>

                </div>
            </div>
            <div>
                <table className='min-w-full leading-normal mt-10'>
                    <thead className='font-poppins'>
                        <tr>
                            <th
                                scope='col'
                                className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                            >
                                Item Image
                            </th>
                            <th
                                scope='col'
                                className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                            >
                                Item Name
                            </th>
                            <th
                                scope='col'
                                className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                            >
                                Item Category
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
                                Quantity
                            </th>
                            <th
                                scope='col'
                                className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                            >
                                Increase Quantity
                            </th>
                            <th
                                scope='col'
                                className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                            >
                                Decrease Quantity
                            </th>
                            <th
                                scope='col'
                                className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                            >
                                Checkout
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cartItems?.map((medicine, index) => {
                                return <CartRows key={index} medicine={medicine} refetch={refetch} />
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
