import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { Helmet } from 'react-helmet-async'
import useAxiosCommon from '../../Hooks/useAxiosCommon/useAxiosCommon';
import ShopMedicineRow from '../../Components/ShopMedicineRow/ShopMedicineRow';

export default function Shop() {
    const axiosCommon = useAxiosCommon()
    const {data : medicines = [], isLoading, refetch} = useQuery({
        queryKey : ['medicines'],
        queryFn : async() => {
            const {data} = await axiosCommon.get('/medicine-number');
            return data
        }
    })

    return (
        <div className='mt-10'>
            <Helmet>
                <title>Shop</title>
            </Helmet>
            <table className='min-w-full leading-normal' >
                <thead>
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
                            Item Mass (MG)
                        </th>
                        <th
                            scope='col'
                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                        >
                            Details
                        </th>
                        <th
                            scope='col'
                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                        >
                            Add to cart
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        medicines?.map((medicine, index) => {
                            return <ShopMedicineRow key={index} medicine={medicine} reFetch={refetch} />
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
