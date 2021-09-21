import React from 'react'
import SubscribeForm from './SubscribeForm'

const Newsletter = () => {
    return (
        <div className="newsletter container">
            <h1 className="section__title">Subscribe to our newsletter</h1>
            <h4 className="section__tagline">We will keep you updated with the latest product and sales</h4>
            <SubscribeForm />
        </div>
    )
}

export default Newsletter
