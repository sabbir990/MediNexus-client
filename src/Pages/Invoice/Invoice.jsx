import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { Link, useParams } from 'react-router-dom'
import useAxiosCommon from '../../Hooks/useAxiosCommon/useAxiosCommon';
import Logo from '../../Components/Logo/Logo';
import { FaPrint } from "react-icons/fa6";
import { FaDoorOpen } from "react-icons/fa";


export default function Invoice() {
    const { id } = useParams();
    const axiosCommon = useAxiosCommon();

    const { data: paidInfo, isLoading, refetch } = useQuery({
        queryKey: ['paidInfo', id],
        queryFn: async () => {
            const { data } = await axiosCommon.get(`/billing-details/${id}`);
            console.log(data)
            return data;
        }
    })

    const calculationDiscount = !isLoading && (paidInfo?.perUnitPrice * paidInfo?.discount) / 100;
    const discountedPrice = !isLoading && paidInfo?.perUnitPrice - calculationDiscount;
    const paid = !isLoading && paidInfo?.quantity ? paidInfo?.quantity * discountedPrice : discountedPrice;

    return (
        <div className='py-8 font-poppins'>
            <div className='flex justify-center'>
                <Logo />
            </div>
            <div className='text-center mt-8 space-y-4'>
                <h1 className='font-bold text-2xl'>Invoice Details</h1>
                <h3 className='text-xl text-gray-700'>Review Your Billing Information</h3>
                <p className='text-gray-500'>Easily access and review your transaction details. Below is a summary of your recent payment, including billing information, payment method, and itemized charges. If you have any questions or need assistance, please contact our support team.</p>
                <div className='w-48 h-1 bg-green-500 rounded-lg m-auto'>

                </div>
            </div>
            <div>
                <h3 className='mt-4 font-bold underline text-lg text-center my-8'>Payment Details</h3>
                <div className='flex justify-center'>
                    <img src={paidInfo?.itemImage} alt={paidInfo?.itemName} />
                </div>
                <div className='mt-5 text-center'>
                    <p className='font-bold'>Item Name : {paidInfo?.itemName}</p>
                    <p>Item Generic Name : {paidInfo?.itemGenericName}</p>
                    <p>quantity : {paidInfo?.quantity ? paidInfo?.quantity : 1}</p>
                    <p>Company : {paidInfo?.company}</p>
                    <p>Price Per Unit : ${paidInfo?.perUnitPrice}</p>
                    <p>Item Mass Unit : {paidInfo?.itemMassUnit}</p>
                    <p>Discount : {paidInfo?.discount}%</p>
                    <p>Paid Price : ${paid}</p>
                    <p>Paid Time : {new Date(paidInfo?.date).toLocaleTimeString()}</p>
                    <p>Paid Date : {new Date(paidInfo?.date).toLocaleDateString()}(MM/DD/YYYY)</p>
                </div>
                <div className='flex justify-center space-x-8 mt-8'>
                    <button className='btn btn-accent hover:btn-outline text-white'>Print <FaPrint /></button>
                    <Link to={'/'}>
                        <button className='btn btn-info hover:btn-outline text-white'>Go Home <FaDoorOpen /></button>
                    </Link>
                </div>
                <div className='mt-10 text-center text-gray-500'>
                    Your payment is successful! Enjoy!
                </div>
            </div>
        </div>
    )
}
