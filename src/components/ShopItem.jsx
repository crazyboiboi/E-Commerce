import React from 'react'
import { Link } from 'react-router-dom'

const ShopItem = ({ item }) => {
    return (
        <Link to={`/item/${item.id}`}>
            <div className="shop__item">
                <img src={item.media.source} alt={item.name} />
                <div className="shop__item-content">
                    <p className="shop__item-category">{item.categories[0].name}</p>
                    <h1 className="shop__item-name">{item.name}</h1>
                    <h4 className="shop__item-price">{item.price.formatted_with_symbol}</h4>

                </div>
            </div>
        </Link>
    )
}

export default ShopItem
