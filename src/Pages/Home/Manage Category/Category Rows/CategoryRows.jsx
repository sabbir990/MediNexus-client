import React from 'react'
import useAxiosSecure from '../../../../Hooks/useAxiosSecure/useAxiosSecure';
import { useMutation, useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';

export default function CategoryRows({ category, icon: Icon, refetch }) {
    const { _id, label, icon } = category;
    const axiosSecure = useAxiosSecure();

    const { data: medicinesByCategory = [], isLoading } = useQuery({
        queryKey: ['medicinesByCategory', label],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/medicines-by-category/${label}`);
            return data;
        }
    })

    const { mutateAsync } = useMutation({
        mutationFn: async (id) => {
            const { data } = await axiosSecure.delete(`/category/${id}`);
            return data;
        },

        onSuccess: () => {
            toast.success("Category Deleted Successfully!");
            refetch();
        }
    })


    const handleCategoryDelete = async (id) => {

        try {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then(async(result) => {
                if (result.isConfirmed) {

                    await mutateAsync(id)
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your category has been deleted.",
                        icon: "success"
                    });
                }
            });
        } catch (error) {
            console.log(error.message);
            toast.error(error.message)
        }
    }
    return (
        <tr>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <div className='ml-3'>
                    <p className='text-gray-900 whitespace-no-wrap flex items-center space-x-2'>({<Icon size={28} />})<p>{icon}</p></p>
                </div>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap font-poppins font-bold'>{label}</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>{medicinesByCategory?.length}</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'><button className='btn btn-warning text-white' onClick={() => handleCategoryDelete(_id)}>Delete</button></p>
            </td>
        </tr>
    )
}
