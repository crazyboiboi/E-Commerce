import React from 'react'
import { loadStripe } from '@stripe/stripe-js'

import { Elements, ElementsConsumer, CardCvcElement, CardNumberElement, CardExpiryElement, CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const PaymentForm = () => {
    // const getOrderData = (paymentMethod) => {
    //     return {
    //         line_items: checkoutToken.live.line_items,
    //         customer: {
    //             firstname: shippingData.firstname,
    //             lastname: shippingData.lastname,
    //             email: shippingData.email,
    //         },
    //         shipping: {
    //             name: 'Primary',
    //             street: shippingData.address,
    //             town_city: shippingData.city,
    //             county_state: shippingData.sdivision,
    //             postal_zip_code: shippingData.zip,
    //             country: shippingData.scountry,
    //         },
    //         fulfillment: { shipping_method: shippingData.soption, },
    //         payment: {
    //             gateway: 'stripe',
    //             stripe: {
    //                 payment_method_id: paymentMethod.id,
    //             },
    //         },
    //     }
    // }

    const handleSubmit = async ({ event, elements, stripe }) => {
        event.preventDefault();

        // if (!stripe || !elements)
        //     return;

        // const cardElement = elements.getElement({CardNumberElement, CardExpiryElement, CardCvcElement});

        // console.log('hello');

        // const { error, paymentMethod } = await stripe.createPaymentMethod({ type: 'card', card: cardElement });

        // if (error) {
        //     console.log(error);
        // } else {
        //     // const orderData = getOrderData(paymentMethod);
        //     console.log('hello');
        // }
    }

    return (
        <div className="checkout__section payment">
            <h1 className="section__title">Payment Details</h1>

        </div >
    )
}

export default PaymentForm



{/* < FormProvider {...methods }>
    <form className="form" onSubmit={e => handleSubmit(e, elements, stripe)}>
        <CustomTextField name='cardnumber' label='Card Number' span="span" />
        <CustomTextField name='month' label='Month' />
        <CustomTextField name='year' label='Year' />
        <CustomTextField name='cvc' label='CVC' />
    </form>
</FormProvider > */}


{/* <Elements stripe={stripePromise}>
<ElementsConsumer>
    {({ elements, stripe }) => (
        <form className="form" onSubmit={e => handleSubmit(e, elements, stripe)}>
            <CardElement className="span"/>
            <span className="section__paragraph span">Card Number<CardNumberElement className="field" /></span>
            <span className="section__paragraph">Card Expiry<CardExpiryElement className="field" /></span>
            <span className="section__paragraph">CVC<CardCvcElement className="field" /></span>
            <button className="btn btn-primary span" disabled={!stripe}>Pay $25.30</button>
        </form>
    )}
</ElementsConsumer>
</Elements> */}