import React from 'react'
import { Link } from 'react-router-dom'

import ShopItem from './ShopItem'

const Gallery = ({ title, subtitle, items, category }) => {
    const displayedItems = category === "" ? items : items.filter((item) => category === item.categories[0].name);

    return (
        <div className="gallery container">
            <div className="gallery__header">
                <h1 className="section__title">{title}</h1>
                <div>
                    <Link to="/shop" className="btn btn-secondary gray">See More</Link>
                </div>
                <h4 className="section__paragraph">{subtitle}</h4>
            </div>
            <div className="gallery__items">
                {
                    displayedItems.filter((item, idx) => idx < 4).map(item => (
                        <ShopItem key={item.id} item={item} />
                    ))
                }
            </div>
        </div>
    )
}

Gallery.defaultProps = {
    category: "",
}

export default Gallery
