import React from 'react'

import AddressForm from './Checkout/AddressForm'
import CheckoutSummary from './Checkout/CheckoutSummary'
import PaymentForm from './Checkout/PaymentForm'

const Checkout = () => {
    return (
        <div className="checkout">
            <AddressForm />
            <PaymentForm />
            <CheckoutSummary />
        </div>
    )
}

export default Checkout
