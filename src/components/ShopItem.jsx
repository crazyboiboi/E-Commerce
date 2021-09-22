import React from 'react'
import { Link } from 'react-router-dom'

const ShopItem = ({ name, category, price, image, sales }) => {

    return (
        <Link to="/item">
            <div className="shop__item">
                {
                    sales &&
                    <div class="shop__item-banner">
                        <p>SALE ENDS: 12:32:25 </p>
                    </div>
                }
                <img src={image} alt={name} />
                <div className="shop__item-content">
                    <p className="shop__item-category">{category}</p>
                    <h1 className="shop__item-name">{name}</h1>
                    <h4 className="shop__item-price">{price} {sales ? <span>{price}</span> : ''} </h4>

                </div>
            </div>
        </Link>
    )
}

export default ShopItem
