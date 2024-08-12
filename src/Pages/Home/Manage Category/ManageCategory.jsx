import React, { useState } from 'react'
import useAxiosSecure from '../../../Hooks/useAxiosSecure/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Logo from '../../../Components/Logo/Logo';
import CategoryRows from './Category Rows/CategoryRows';
import { GiMedicines } from "react-icons/gi"
import AddCategoryModal from './AddcategoryModal/AddCategoryModal';
import { Helmet } from 'react-helmet-async';

export default function ManageCategory() {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);
    const iconMap = {
        GiMedicines: GiMedicines
    }
    const axiosSecure = useAxiosSecure();

    const { data: categories = [], isLoading, refetch } = useQuery({
        queryKey: ['category'],
        queryFn: async () => {
            const { data } = await axiosSecure.get('/categories')
            return data;
        }
    })

    return (
        <div>
            <Helmet>
                <title>Manage Category</title>
            </Helmet>
            <div className='flex flex-col items-center mt-8'>
                <Logo />
                <div className='text-center mt-4 font-poppins'>
                    <h1 className='font-bold text-2xl'>Manage Categories</h1>
                    <p className='text-gray-500'>Efficiently Organize and Maintain Medicine Categories for a Seamless User Experience</p>
                </div>
            </div>

            <div className='container mx-auto px-4 sm:px-8'>
                <div className='py-8'>
                    <button className='btn btn-primary btn-block' onClick={handleOpen}>Add category</button>
                    <AddCategoryModal handleOpen={handleOpen} handleClose={handleClose} isOpen={isOpen} refetch={refetch} />
                    <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
                        <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
                            <table className='min-w-full leading-normal'>
                                <thead>
                                    <tr>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                        >
                                            Category Icon/Image
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                        >
                                            Category Name
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                        >
                                            Category Item Number
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                        >
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        categories?.map((category, index) => {
                                            return <CategoryRows key={index} category={category} icon={iconMap?.GiMedicines} refetch={refetch} />
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
