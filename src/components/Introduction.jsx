import React from 'react'
import { ArrowForward } from '@material-ui/icons';
import { Link } from 'react-router-dom';

import hero from '../assets/hero.png'

const Introduction = () => {
    return (
        <div className="introduction container">
            <img src={hero} alt="hero" />
            <div className="introduction__content">
                <h4 className="section__tagline">Welcome to Commerce</h4>
                <h1 className="section__title"> Browse our premium product </h1>
                <p className="section__paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Suspendisse ac tortor ut ligula posuere porta. Nunc ultrices malesuada erat at
                    condimentum. Pellentesque faucibus lectus sit amet erat consequat finibus. Donec semper
                    ultricies elementum. </p>
                <Link to="/shop" className="btn btn-primary blue">Browse Now
                    <ArrowForward style={{fontSize: 'medium'}}/>
                </Link>
            </div>
        </div>
    )
}

export default Introduction
