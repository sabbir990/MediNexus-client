import React from 'react'
import CategoryBox from './CategoryBox'
import { GiMedicines } from "react-icons/gi"
import useAxiosCommon from '../../../Hooks/useAxiosCommon/useAxiosCommon'
import { useQuery } from '@tanstack/react-query'


export default function Categories() {
    const axiosCommon = useAxiosCommon();

    const { data: categories = [], isLoading, refetch } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const { data } = await axiosCommon.get("/categories");
            return data;
        }
    })

    return (
        <div className='mt-28 font-poppins'>
            <h1 className='text-center font-bold font-poppins text-3xl mb-6'>Categories</h1>
            <p className='text-center font-bold font-poppins text-gray-500 mb-6'>Explore Our Wide Range of Categories</p>
            <div className='w-36 h-1 m-auto rounded-lg bg-blue-500'>

            </div>
            <div className="pt-4 gap-4 flex overflow-x-auto">
                {categories && categories.map((category, index) => (
                    <div key={index} className="min-w-[calc(25%-1rem)] flex-shrink-0">
                        <CategoryBox label={category?.label} icon={GiMedicines} />
                    </div>
                ))}
            </div>
        </div>
    )
}
