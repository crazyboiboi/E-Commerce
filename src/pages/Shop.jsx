import React, { useState, useEffect } from 'react'

import ShopItems from '../components/ShopItems'
import SortAndFilter from '../components/SortAndFilter'
import ShopBanner from '../components/ShopBanner'

const Shop = ({ items }) => {
    const [sortValue, setSortValue] = useState('');
    const [filterValue, setFilterValue] = useState('');
    const [resultItems, setResultItems] = useState([]);

    // Return items according to sort and filter value if given 
    useEffect(() => {
        if (filterValue === "") {
            setResultItems(items);
        } else {
            const displayedItems = items.filter((item) => filterValue === item.categories[0].name);
            setResultItems(displayedItems);
        }
    }, [items, filterValue])

    // String comparator for sorting
    const compareString = (a, b) => {
        if (a.name < b.name)
            return -1;
        if (a.name > b.name)
            return 1;
        return 0;
    }

    useEffect(() => {
        let displayedItems = []
        switch (sortValue) {
            case "asc":
                displayedItems = [...resultItems].sort((a, b) => compareString(a, b));
                break;
            case "desc":
                displayedItems = [...resultItems].sort((a, b) => compareString(b, a));
                break;
            case "plow":
                displayedItems = [...resultItems].sort((a, b) => a.price.raw - b.price.raw);
                break;
            case "phigh":
                displayedItems = [...resultItems].sort((a, b) => b.price.raw - a.price.raw);
                break;
            default:
                displayedItems = resultItems;
                break;
        }
        setResultItems(displayedItems);
    }, [items, sortValue])


    useEffect(() => {
        setResultItems(items);
    }, [items]);


    return (
        <main>
            <ShopBanner name="All Products" />
            <SortAndFilter setSortValue={setSortValue} setFilterValue={setFilterValue} />
            <ShopItems items={resultItems} />
        </main>
    )
}

export default Shop
