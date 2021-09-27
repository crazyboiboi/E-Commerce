import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'

import { commerce } from '../lib/commerce'

import AddressForm from './Checkout/AddressForm'
import CheckoutSummary from './Checkout/CheckoutSummary'
import PaymentForm from './Checkout/PaymentForm'

const Checkout = ({ cart, refreshCart }) => {
    const history = useHistory();

    const [checkoutToken, setCheckoutToken] = useState(null);
    const [shippingData, setShippingData] = useState({});
    const [order, setOrder] = useState({});

    const generateToken = async () => {
        try {
            const token = await commerce.checkout.generateToken(cart.id, { type: 'cart' });
            setCheckoutToken(token);
        } catch (error) {
            console.log(error);
            history.push('/error');
        }
    }

    // Handle capture checkout to convert checkout token and data into an order object
    const handleCaptureCheckout = async (checkoutTokenId, orderData) => {
        try {
            const incomingOrder = await commerce.checkout.capture(checkoutTokenId, orderData);
            setOrder(incomingOrder);
            refreshCart();
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
                    <CheckoutSummary checkoutToken={checkoutToken} shippingData={shippingData} />
                    <PaymentForm checkoutToken={checkoutToken} shippingData={shippingData} onCaptureCheckout={handleCaptureCheckout} />
                    <Link to="/cart" className="btn btn-submit darkgray back-btn">Back</Link>
                </>
            }
        </div>
    )
}

export default Checkout
