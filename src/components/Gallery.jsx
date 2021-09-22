import React from 'react'
import { Link } from 'react-router-dom'

import ShopItem from './ShopItem'

import pic from '../assets/bag.png'
import pic1 from '../assets/bottle.png'

const Gallery = ({ title, subtitle, items, sales }) => {
    return (
        <div class="gallery container">
            <div className="gallery__header">
                <h1 className="section__title">{title}</h1>
                <div>
                    <Link to="/shop" className="btn btn-secondary">See More</Link>
                </div>
                <h4 className="section__paragraph">{subtitle}</h4>
            </div>
            <div className="gallery__items">
                <ShopItem name="Watch" category="Accessories" price="$99.90" image={pic} sales={sales} />
                <ShopItem name="Watch" category="Accessories" price="$99.90" image={pic1} sales={sales} />
                <ShopItem name="Watch" category="Accessories" price="$99.90" image={pic} sales={sales} />
                <ShopItem name="Watch" category="Accessories" price="$99.90" image={pic1} sales={sales} />
            </div>
        </div>
    )
}

Gallery.defaultProps = {
    sales: false,
}

export default Gallery
