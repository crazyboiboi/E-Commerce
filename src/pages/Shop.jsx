import React from 'react'

import ShopItems from '../components/ShopItems'
import SortAndFilter from '../components/SortAndFilter'
import ShopBanner from '../components/ShopBanner'

const Shop = () => {
    return (
        <main>
            <ShopBanner name="All Products" />
            <SortAndFilter />
            <ShopItems />
        </main>
    )
}

export default Shop
