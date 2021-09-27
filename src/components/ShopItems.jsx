import React from 'react'
import ShopItem from './ShopItem'

const ShopItems = ({ items }) => {
    return (
        <div className="products container">
            <div className="gallery__items">
                {
                    items.map((item) => (
                        <ShopItem key={item.id} item={item} />
                    ))
                }
            </div>
        </div>
    )
}

export default ShopItems
