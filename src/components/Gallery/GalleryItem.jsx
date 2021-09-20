import React from 'react'

const GalleryItem = ({ name, category, price, image, sales }) => {
    return (
        <div className="gallery__item">
            {sales &&
                <div class="gallery__item-banner">
                    <p>SALE ENDS: 12:32:25 </p>
                </div>
            }
            <img src={image} alt={name} />
            <div className="gallery__item-content">
                <p className="gallery__item-category">{category}</p>
                <h1 className="gallery__item-name">{name}</h1>
                <h4 className="gallery__item-price">{price} {sales ? <span>{price}</span> : ''} </h4>
                
            </div>
        </div>
    )
}

export default GalleryItem
