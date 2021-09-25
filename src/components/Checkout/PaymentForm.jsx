import React, { useState } from 'react'

import { loadStripe } from '@stripe/stripe-js'
import { Elements, CardElement, ElementsConsumer } from '@stripe/react-stripe-js';

import { CircularProgress } from '@material-ui/core';


const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const PaymentForm = ({ checkoutToken, shippingData, onCaptureCheckout }) => {
    const [error, setError] = useState(null);
    const [paymentMethod, setPaymentMethod] = useState(null);
    const [isFinished, setIsFinished] = useState(false);

    const timeout = () => {
        setTimeout(() => {
            setIsFinished(true);
        }, 3000);
    }

    /* To enable the stripe gateway, you need to add it to the chec dashboard (which
       requires a credit card). Thus I will be using the test gateway to show transactions
       can be done. Below is the code to replace the payment field.
       gateway: 'stripe',
           stripe: {
           payment_method_id: paymentMethod.id,
       }, 
    */
    const getOrderData = (paymentMethod) => {
        return {
            line_items: checkoutToken.live.line_items,
            customer: {
                firstname: shippingData.fname,
                lastname: shippingData.lname,
                email: shippingData.email,
            },
            shipping: {
                name: 'Primary',
                street: shippingData.address,
                town_city: shippingData.city,
                county_state: shippingData.shippingSubdivision,
                postal_zip_code: shippingData.zipcode,
                country: shippingData.shippingCountry,
            },
            fulfillment: { shipping_method: shippingData.shippingOption, },
            payment: {
                gateway: 'test_gateway',
                card: {
                    number: '4242424242424242',
                    expiry_month: '02',
                    expiry_year: '24',
                    cvc: '123',
                    postal_zip_code: '94107',
                },
            },
        }
    }

    const handleSubmit = async (event, stripe, elements) => {
        event.preventDefault();

        if (!stripe || !elements)
            return;

        const cardElement = elements.getElement(CardElement);

        const { error, paymentMethod } = await stripe.createPaymentMethod({ type: 'card', card: cardElement });

        if (error) {
            setError(error);
        } else {
            setPaymentMethod(paymentMethod);
            const orderData = getOrderData(paymentMethod);
            onCaptureCheckout(checkoutToken.id, orderData);
            timeout();
        }
    }

    return (
        <div className="checkout__section payment">
            <h1 className="section__title">Payment Details</h1>
            {!paymentMethod ?
                (<Elements stripe={stripePromise}>
                    <ElementsConsumer>
                        {({ elements, stripe }) => (
                            <form className="form" onSubmit={e => handleSubmit(e, stripe, elements)}>
                                <CardElement className="span" />
                                <button type="submit" className="btn btn-primary span" disabled={!stripe}>Pay $25.30</button>
                            </form>
                        )}
                    </ElementsConsumer>
                </Elements>)
                : !isFinished ? (<div> <CircularProgress /> </div>)
                    : (<div>COMPLETED </div>)
            }
        </div >
    )
}

export default PaymentForm
