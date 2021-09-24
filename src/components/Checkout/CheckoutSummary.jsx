import React from 'react'

const CheckoutSummary = () => {
    return (
        <div className="checkout__section summary">
            <h1 className="section__title">Summary</h1>
            <br/>
            <h4 className="section__tagline">Subtotal <span>$23.05</span></h4>
            <h4 className="section__tagline">Discount <span>$23.05</span></h4>
            <h4 className="section__tagline">Shipping <span>$23.05</span></h4>
            <h4 className="section__tagline">Total <span>$23.05</span></h4>
        </div>
    )
}

export default CheckoutSummary
