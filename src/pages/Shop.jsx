import React from 'react'

import ShopItems from '../components/ShopItems'
import SortAndFilter from '../components/SortAndFilter'
import ShopBanner from '../components/ShopBanner'

const Shop = ({items}) => {
    return (
        <main>
            <ShopBanner name="All Products" />
            <SortAndFilter />
            <ShopItems items={items}/>
        </main>
    )
}

export default Shop
