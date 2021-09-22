import React from 'react'
import ShopItem from './ShopItem'

import pic from '../assets/bag.png'
import pic1 from '../assets/bottle.png'

const ShopItems = ({ items, sales }) => {
    return (
        <div className="products container">
            <div className="gallery__items">
                {
                    items.map((item) => (
                        <ShopItem key={item.id} item={item} sales={sales} />
                    ))
                }
            </div>
        </div>
    )
}

ShopItems.defaultProps = {
    sales: false,
}

export default ShopItems
