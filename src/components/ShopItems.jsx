import React from 'react'
import ShopItem from './ShopItem'

import pic from '../assets/bag.png'
import pic1 from '../assets/bottle.png'

const ShopItems = ({ sales }) => {
    return (
        <div className="products container">
            <div className="gallery__items">
                <ShopItem name="Watch" category="Accessories" price="$99.90" image={pic} sales={sales} />
                <ShopItem name="Watch" category="Accessories" price="$99.90" image={pic1} sales={sales} />
                <ShopItem name="Watch" category="Accessories" price="$99.90" image={pic} sales={sales} />
                <ShopItem name="Watch" category="Accessories" price="$99.90" image={pic1} sales={sales} />
                <ShopItem name="Watch" category="Accessories" price="$99.90" image={pic} sales={sales} />
                <ShopItem name="Watch" category="Accessories" price="$99.90" image={pic1} sales={sales} />
            </div>
        </div>
    )
}

ShopItems.defaultProps = {
    sales: false,
}

export default ShopItems
