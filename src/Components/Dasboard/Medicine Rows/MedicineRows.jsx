import { useMutation, useQuery } from '@tanstack/react-query';
import React, { useState } from 'react'
import useAxiosSecure from '../../../Hooks/useAxiosSecure/useAxiosSecure';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';
import UpdateMedicine from '../Update Medicine/UpdateMedicine';

export default function MedicineRows({ medicine, reFetch }) {
    const { _id, itemName, itemGenericName, shortDescription, itemImage, category, company, itemMassUnit, perUnitPrice, discount } = medicine;
    const axiosSecure = useAxiosSecure()
    const [isUpdate, setIsUpdate] = useState(false)

    // const {data : updatableMedicine, isLoading, refetch} = useQuery({
    //     queryKey : ['updatableMedicine'],
    //     queryFn : async() => {
    //         const {data} = await axiosSecure.get(`/medicine/${_id}`);
    //         return data
    //     }
    // })


    const { mutateAsync } = useMutation({
        mutationFn: async (id) => {
            const { data } = await axiosSecure.delete(`/medicine/${id}`)
            return data
        },
        onSuccess: () => {
            toast.success("Item Deleted Successfully")
        }
    })

    const handleDeleteMedicine = async (id) => {
        console.log(id)

        try {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then( async(result) => {
                if (result.isConfirmed) {
                    await mutateAsync(id)
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your product has been deleted.",
                        icon: "success"
                    });
                    reFetch()
                }
            });
        } catch (error) {
            console.log(error.message)
            toast.error(error.message)
        }

    }

    const handleUpdatePopup = () => {
        setIsUpdate(!isUpdate)

    }
    return (
        <tr>

            <th
                scope='col'
                className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
            >
                <img src={itemImage && itemImage} alt="item" className='h-12 w-12 border border-transparent ' />
            </th>
            <th
                scope='col'
                className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
            >
                {itemName && itemName}
            </th>
            <th
                scope='col'
                className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
            >
                {category && category}
            </th>
            <th
                scope='col'
                className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
            >
                {company && company}
            </th>
            <th
                scope='col'
                className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
            >
                {itemMassUnit && itemMassUnit}
            </th>
            <th
                scope='col'
                className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
            >
                <button className='btn btn-error text-white' onClick={() => handleDeleteMedicine(_id)}>Delete</button>
            </th>
            <th
                scope='col'
                className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
            >
                <button className='btn btn-warning text-white' onClick={handleUpdatePopup}>Update</button>

                {isUpdate && <UpdateMedicine isOpen={isUpdate} setIsOpen={setIsUpdate} _id={_id}/>}
            </th>
        </tr>

    )
}
