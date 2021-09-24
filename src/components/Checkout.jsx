import React, { useState, useEffect } from 'react'

import { commerce } from '../lib/commerce'

import AddressForm from './Checkout/AddressForm'
import CheckoutSummary from './Checkout/CheckoutSummary'
import PaymentForm from './Checkout/PaymentForm'

const Checkout = ({ cart }) => {
    const [checkoutToken, setCheckoutToken] = useState(null);
    const [shippingData, setShippingData] = useState({});

    const generateToken = async () => {
        try {
            const token = await commerce.checkout.generateToken(cart.id, { type: 'cart' });
            setCheckoutToken(token);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        generateToken();
    }, [cart]);

    const saveBillingDetails = (data) => {
        setShippingData(data);
    }

    return (
        <div className="checkout">
            {checkoutToken &&
                <>
                    <AddressForm checkoutToken={checkoutToken} save={saveBillingDetails} />
                    <PaymentForm />
                    <CheckoutSummary checkoutToken={checkoutToken} shippingData={shippingData} />
                </>
            }
        </div>
    )
}

export default Checkout
