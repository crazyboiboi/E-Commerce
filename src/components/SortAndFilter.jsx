import React from 'react'

const SortAndFilter = () => {
    return (
        <div className="sortfilter container">
            <div>
                <label htmlFor="sort">Sort</label>
                <select name="sort" defaultValue={'DEFAULT'}>
                    <option disabled value={"DEFAULT"}>-- Select an option --</option>
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                    <option value="plow">Price Low</option>
                    <option value="phigh">Price High</option>
                </select>
            </div>

            <div>
                <label htmlFor="filter">Filter by Category</label>
                <select name="filter" defaultValue={'DEFAULT'}>
                    <option disabled value={"DEFAULT"}>-- Select an option --</option>
                    <option value="beauty">Beauty</option>
                    <option value="decor">Decor</option>
                    <option value="accessories">Accessories</option>
                </select>
            </div>
        </div>
    )
}

export default SortAndFilter
