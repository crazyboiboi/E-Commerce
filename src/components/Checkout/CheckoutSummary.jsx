import React, { useState, useEffect } from 'react'

import { commerce } from '../../lib/commerce';

const CheckoutSummary = ({ checkoutToken, shippingData }) => {
    const [summary, setSummary] = useState({});

    

    useEffect(() => {
        const fetchSummary = async () => {
            const res = await commerce.checkout.checkShippingOption(checkoutToken.id, {
                shipping_option_id: shippingData.shippingOption,
                country: shippingData.shippingCountry,
                region: shippingData.shippingSubdivision,
            })
    
            setSummary(res);
        }
        if (Object.keys(shippingData).length && shippingData.shippingOption !== '')
            fetchSummary();
    }, [shippingData, checkoutToken.id]);

    let subtotal = checkoutToken.live.subtotal.formatted_with_symbol;
    let discount = checkoutToken.live.discount.length ? "100%" : "$0.00";
    let shipping = "$0.00";
    let total = checkoutToken.live.total.formatted_with_symbol;

    if (Object.keys(summary).length) {
        discount = summary.live.discount.length ? "100%" : "$0.00";
        subtotal = summary.live.subtotal.formatted_with_symbol;
        shipping = summary.live.shipping.price.formatted_with_symbol;
        total = summary.live.total.formatted_with_symbol;
    }

    return (
        <div className="checkout__section summary">
            <h1 className="section__title">Summary</h1>
            <br />
            <h4 className="section__tagline">Subtotal <span>{subtotal}</span></h4>
            <h4 className="section__tagline">Discount <span>{discount}</span></h4>
            <h4 className="section__tagline">Shipping <span>{shipping}</span></h4>
            <h4 className="section__tagline">Total <span>{total}</span></h4>
        </div>
    )
}

export default CheckoutSummary
