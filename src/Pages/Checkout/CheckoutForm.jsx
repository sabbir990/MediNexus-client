import React, { useEffect, useState } from 'react';
import { CardElement, PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { GiExitDoor } from "react-icons/gi";
import './Checkout.css';
import { Link, useNavigate } from 'react-router-dom';
import useAxiosCommon from '../../Hooks/useAxiosCommon/useAxiosCommon';
import { ImSpinner9 } from "react-icons/im";
import useAuth from '../../Hooks/useAuth/useAuth';
import toast from 'react-hot-toast';
import { useMutation } from '@tanstack/react-query';


const CheckoutForm = ({ medicine, discountedPrice }) => {
    const {user} = useAuth()
    const stripe = useStripe();
    const elements = useElements();
    const axiosCommon = useAxiosCommon()
    const [processing, setProcessing] = useState(false)
    const navigate = useNavigate()
    const [clientSecret, setClientSecret] = useState();

    useEffect(() => {
        generateClientSecret()
    }, [discountedPrice])

    const generateClientSecret = async() => {
        try{
            const {data} = await axiosCommon.post('/create-payment-intent', {discountedPrice})
            setClientSecret(data)
        }catch(error){
            console.log(error);
            toast.error(error.message)
        }
    }

    const {mutateAsync} = useMutation({
        mutationFn : async(paymentDetails) => {
            const {data} = await axiosCommon.post('/billing', paymentDetails);
            return data;
        },

        onSuccess : () => {
            toast.success("Billing successful!");
            setProcessing(false);
        }
    })


    const handleSubmit = async (event) => {
        event.preventDefault();

        setProcessing(true)

        if (!stripe || !elements) {
            setProcessing(false)
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            setProcessing(false)
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            setProcessing(false);
            toast.error(error.message);
            return;
        } else {
            console.log('[PaymentMethod]', paymentMethod);
        }


        const {error : confirmError, paymentIntent} = await stripe.confirmCardPayment(clientSecret?.clientSecret, {
            payment_method : {
                card : card,
                billing_details : {
                    name : user?.displayName,
                    email : user?.email
                }
            }
        })

        if(confirmError){
            console.log(error);
            setProcessing(false)
            toast.error(error.message);
            return
        }

        if(paymentIntent.status === 'succeeded'){
            const paymentObject = {
                ...medicine,
                transactionId : paymentIntent.id,
                status : 'pending',
                paid_total : discountedPrice,
                date : new Date()
            }

            delete paymentObject._id;


            const savePayment = await mutateAsync(paymentObject)

            navigate(`/invoice/${savePayment?.insertedId}`)
            setProcessing(false)
        }
    };


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <div className='mt-5 space-x-8'>
                    <button className='btn btn-success hover:btn-outline text-white' disabled={!stripe || processing || !clientSecret}>{!processing ? `Pay $${discountedPrice}` : <ImSpinner9 className='animate-spin m-auto' /> }</button>
                    <Link to={'/cart'}>
                        <button className='btn btn-info hover:btn-outline text-white'><GiExitDoor />Go back</button>
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default CheckoutForm