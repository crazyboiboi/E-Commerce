import React from 'react'
import { Link } from 'react-router-dom'

import hero from '../assets/cart.jpg'

const Sales = () => {
    return (
        <div className="sales container">
            <div className="sales__content">
                <h1 className="section__title">Up to 50% off</h1>
                <h4 className="section__tagline">Grab it while you can!</h4>
                <p className="section__paragraph"> Donec ut lorem sit amet leo malesuada porta id ut
                    eros.Quisque at eros vel ipsum laoreet fringilla nec sed arcu.Pellentesque habitant
                    morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                <Link to="/shop" className="btn btn-primary">Shop Now</Link>
            </div>

            <img src={hero} alt="hero-shopping-cart" />
        </div>
    )
}

export default Sales
