import { Helmet } from 'react-helmet-async'
import useAuth from '../../../Hooks/useAuth/useAuth'
import AddMedicineModal from '../Add Medicine Modal/AddMedicineModal';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../Hooks/useAxiosSecure/useAxiosSecure';
import MedicineRows from '../Medicine Rows/MedicineRows';

const ManageMedicines = () => {
    const { user } = useAuth();
    const [isOpen, setIsOpen] = useState(false)
    const axiosSecure = useAxiosSecure();

    const { data: medicines = [], isLoading, refetch } = useQuery({
        queryKey: ['medicines', user?.email],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/medicines/${user?.email}`);
            return data;
        }
    })


    const handleIsOpen = () => {
        setIsOpen(true)
    }
    return (
        <>
            <Helmet>
                <title>Manage Medicines</title>
            </Helmet>

            <div className='container mx-auto px-4 sm:px-8'>
                <div>
                    <h1 className='flex items-center justify-center space-x-2 text-center text-3xl mt-20'><p>Manage Your Medicines</p> <p className='font-lijeva'>{user?.displayName}</p></h1>
                </div>
                <div className='py-8'>
                    <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto space-y-4'>
                        <div>
                            <button className='btn btn-block btn-primary' onClick={handleIsOpen}>Add Medicine</button>
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
                                            Delete
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                        >
                                            Update
                                        </th>
                                    </tr>
                                </thead>
                                <AddMedicineModal refetch={refetch} isOpen={isOpen} setIsOpen={setIsOpen} />
                                <tbody>
                                    {
                                        medicines?.map((medicine, index) => {
                                            return <MedicineRows key={medicine?._id} medicine={medicine} reFetch={refetch}/>
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

export default ManageMedicines