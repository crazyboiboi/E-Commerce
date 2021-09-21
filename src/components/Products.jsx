import React from 'react'
import GalleryItem from './Gallery/GalleryItem'

import pic from '../assets/bag.png'
import pic1 from '../assets/bottle.png'

const Products = ({ sales }) => {
    return (
        <div className="products container">
            <div className="gallery__items">
                <GalleryItem name="Watch" category="Accessories" price="$99.90" image={pic} sales={sales} />
                <GalleryItem name="Watch" category="Accessories" price="$99.90" image={pic1} sales={sales} />
                <GalleryItem name="Watch" category="Accessories" price="$99.90" image={pic} sales={sales} />
                <GalleryItem name="Watch" category="Accessories" price="$99.90" image={pic1} sales={sales} />
                <GalleryItem name="Watch" category="Accessories" price="$99.90" image={pic} sales={sales} />
                <GalleryItem name="Watch" category="Accessories" price="$99.90" image={pic1} sales={sales} />
            </div>
        </div>
    )
}

Products.defaultProps = {
    sales: false,
}

export default Products
