import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { useParams } from 'react-router-dom'
import useAxiosCommon from '../../../Hooks/useAxiosCommon/useAxiosCommon';
import CategoryRows from '../../Category Rows/CategoryRows';

export default function CategoryItems() {
    const { category } = useParams();
    const axiosCommon = useAxiosCommon()

    const { data: medicineByCategory = [], isLoading, refetch } = useQuery({
        queryKey: ['medicineByCategory'],
        queryFn: async () => {
            const { data } = await axiosCommon(`/medicine-by-category/?category=${category}`);
            return data;
        }
    })

    return (
        <div className='mt-8'>
            <div>
                <h1 className='text-center mb-4 font-bold text-3xl'>All medicines of {category}</h1>
            </div>
            <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
                <table className='min-w-full leading-normal'>
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
                                Show Details
                            </th>
                            <th
                                scope='col'
                                className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                            >
                                Add To Cart
                            </th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {medicineByCategory?.map((medicine, index) => {
                            return <CategoryRows key={index} medicine={medicine} reFetch={refetch} />
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
