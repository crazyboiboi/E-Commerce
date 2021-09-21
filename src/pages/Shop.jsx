import React from 'react'

import Products from '../components/Products'
import SortAndFilter from '../components/SortAndFilter'
import ShopBanner from '../components/ShopBanner'

const Shop = () => {
    return (
        <main>
            <ShopBanner name="All Products" />
            <SortAndFilter />
            <Products />
        </main>
    )
}

export default Shop
