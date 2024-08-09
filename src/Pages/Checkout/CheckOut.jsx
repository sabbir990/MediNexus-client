import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { useParams } from 'react-router-dom'
import useAxiosCommon from '../../Hooks/useAxiosCommon/useAxiosCommon'
import Logo from '../../Components/Logo/Logo'
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from './CheckoutForm'

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY)

export default function CheckOut() {
  const { itemName } = useParams()
  const axiosCommon = useAxiosCommon()
  const { data: selectedMedicine, isLoading, refetch } = useQuery({
    queryKey: ['selectedMedicine', itemName],
    queryFn: async () => {
      const { data } = await axiosCommon.get(`/selected-medicine/${itemName}`);
      return data
    }
  })

  const medicine = Array.isArray(selectedMedicine) && selectedMedicine.length > 0
  ? selectedMedicine[selectedMedicine.length - 1]
  : null;

  const calculationDiscount = (!isLoading && medicine?.perUnitPrice * medicine?.discount) / 100;
  const discountedPrice = !isLoading && medicine?.perUnitPrice - calculationDiscount
  const totalPrice = !isLoading && medicine?.quantity ? (medicine?.quantity + 1) * discountedPrice : discountedPrice;


  console.log(totalPrice)
  
  return (
    <div className='my-10 mx-4'>
      <div className='flex flex-col items-center space-y-4 justify-center'>
        <Logo />
        <div className='w-40 h-1 bg-blue-500 mx-auto rounded-lg'>

        </div>
      </div>
      <div className='text-center mt-4'>
        <h1 className='text-2xl font-poppins font-bold'>Secure Checkout</h1>
        <p className='text-gray-500'>Review your order and complete your purchase securely on Medinexus</p>
      </div>
      <div className='text-center'>
        <h1 className='mt-8 font-bold underline'>Item Details</h1>
        <div className='space-y-1 mt-4 font-poppins'>
          <div className='flex justify-center'>
            <img src={!isLoading && medicine && medicine?.itemImage} />
          </div>
          <p className='font-bold'>Item Name : {!isLoading && medicine && medicine?.itemName}</p>
          <p>Item Generic Name : {!isLoading && medicine && medicine?.itemGenericName}</p>
          <p>Short Details : {!isLoading && medicine && medicine?.shortDescription}</p>
          <p>Category : {!isLoading && medicine && medicine?.category}</p>
          <p>Company : {!isLoading && medicine && medicine?.company}</p>
          <p>Item Mass Unit : {!isLoading && medicine && medicine?.itemMassUnit}</p>
          <p>Per Unit Price : ${!isLoading && medicine && medicine?.perUnitPrice}</p>
          <p>Discount : {!isLoading && medicine && medicine?.discount}%</p>
          <p>Quantity : {!isLoading && medicine && medicine?.quantity ? medicine?.quantity + 1 : 1}</p>
          <p>Discounted Price : ${discountedPrice}</p>
        </div>
        <div className='mt-5'>
          <Elements stripe={stripePromise}>
            <CheckoutForm medicine={medicine} discountedPrice={totalPrice}/>
          </Elements>
        </div>
      </div>
    </div>
  )
}
