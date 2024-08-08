import React from 'react';
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { GiExitDoor } from "react-icons/gi";
import './Checkout.css';
import { Link } from 'react-router-dom';

const CheckoutForm = ({ medicine, discountedPrice }) => {
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
        } else {
            console.log('[PaymentMethod]', paymentMethod);
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
                    <button className='btn btn-success hover:btn-outline text-white'>Pay ${((medicine?.quantity + 1) * discountedPrice).toFixed(2)}</button>
                    <Link to={'/cart'}>
                        <button className='btn btn-info hover:btn-outline text-white'><GiExitDoor />Go back</button>
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default CheckoutForm