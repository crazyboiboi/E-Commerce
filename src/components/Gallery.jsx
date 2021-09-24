import React from 'react'
import { Link } from 'react-router-dom'

import ShopItem from './ShopItem'

const Gallery = ({ title, subtitle, items, sales }) => {
    return (
        <div className="gallery container">
            <div className="gallery__header">
                <h1 className="section__title">{title}</h1>
                <div>
                    <Link to="/shop" className="btn btn-secondary">See More</Link>
                </div>
                <h4 className="section__paragraph">{subtitle}</h4>
            </div>
            <div className="gallery__items">
                {
                    items.filter((item, idx) => idx < 4).map(item => (
                        <ShopItem key={item.id} item={item} sales={sales} />
                    ))
                }
            </div>
        </div>
    )
}

Gallery.defaultProps = {
    sales: false,
}

export default Gallery
