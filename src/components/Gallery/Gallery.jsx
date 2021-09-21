import React from 'react'

import GalleryItem from './GalleryItem'

import pic from '../../assets/bag.png'
import pic1 from '../../assets/bottle.png'

const Gallery = ({ title, subtitle, items, sales }) => {
    return (
        <div class="gallery container">
            <div className="gallery__header">
                <h1 className="section__title">{title}</h1>
                <button className="btn btn-primary">See More</button>
                <h4 className="section__paragraph">{subtitle}</h4>
            </div>
            <div className="gallery__items">
                <GalleryItem name="Watch" category="Accessories" price="$99.90" image={pic} sales={sales} />
                <GalleryItem name="Watch" category="Accessories" price="$99.90" image={pic1} sales={sales} />
                <GalleryItem name="Watch" category="Accessories" price="$99.90" image={pic} sales={sales} />
                <GalleryItem name="Watch" category="Accessories" price="$99.90" image={pic1} sales={sales}/>
            </div>
        </div>
    )
}

Gallery.defaultProps = {
    sales: false,
}

export default Gallery
