import React from 'react'
import useAxiosSecure from '../../Hooks/useAxiosSecure/useAxiosSecure'
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';

export default function ManageAdvertisementRow({ advertisement, refetch }) {
    const axiosSecure = useAxiosSecure();

    const {mutateAsync} = useMutation({
        mutationFn : async(id) => {
            const {data} = await axiosSecure.patch(`/add-advertisement/${id}`);
            return data;
        },

        onSuccess : () => {
            toast.success("Item added to advertisement successfully!");
            refetch();
        }
    })

    const handleAdvertisement = async(id) => {
        try{
            await mutateAsync(id)
        }catch(error){
            console.log(error);
            toast.error(error.message)
        }
    }
    return (
        <tr>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <div className='flex items-center'>
                    <div className='flex-shrink-0'>
                        <div className='block relative'>
                            <img
                                alt='profile'
                                src={advertisement?.itemImage}
                                className='mx-auto object-cover rounded h-10 w-15 '
                            />
                        </div>
                    </div>
                    <div className='ml-3'>
                        <p className='text-gray-900 whitespace-no-wrap font-bold'>{advertisement?.itemName}</p>
                    </div>
                </div>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <div className='ml-3'>
                    <p className='text-gray-900 whitespace-no-wrap'>
                        {advertisement?.category}
                    </p>
                </div>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>${advertisement?.company}</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>
                    {advertisement?.email}
                </p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>
                    ${advertisement?.perUnitPrice}
                </p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className={`text-gray-900 whitespace-no-wrap font-bold font-poppins ${advertisement?.status === 'requested' ? 'text-red-500' : 'text-green-500'}`}>
                    {advertisement?.status}
                </p>
            </td>
            <td className='px-5 space-x-4 py-5 border-b border-gray-200 bg-white text-sm'>
                <button className='btn btn-success text-white' onClick={() => handleAdvertisement(advertisement?._id)}>{advertisement?.status === 'requested' ? 'ADD' : 'REMOVE'}</button>
            </td>
        </tr>
    )
}
