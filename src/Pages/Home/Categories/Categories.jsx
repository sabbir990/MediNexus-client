import React from 'react'
import CategoryBox from './CategoryBox'
import { GiMedicines } from "react-icons/gi"
import useAxiosCommon from '../../../Hooks/useAxiosCommon/useAxiosCommon'
import { useQuery } from '@tanstack/react-query'


export default function Categories() {
    const iconMap = {
        GiMedicines : GiMedicines
    }
    const axiosCommon = useAxiosCommon();

    const {data : categories = [], isLoading, refetch} = useQuery({
        queryKey : ['categories'],
        queryFn : async() => {
            const {data} = await axiosCommon.get("/categories");
            return data;
        }
    })

    return (
        <div className='mt-28'>
            <h1 className='text-center font-bold font-roboto text-3xl mb-6'>Medicine Categories</h1>
            <div className='pt-4 gap-4 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 overflow-x-auto'>
                {
                    categories && categories.map((category, index) => {
                        return <CategoryBox key={index} label={category?.label} icon={GiMedicines} />
                    })
                }
            </div>
        </div>
    )
}
