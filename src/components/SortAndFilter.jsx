import React from 'react'

const SortAndFilter = ({ setSortValue, setFilterValue }) => {
    return (
        <div className="sortfilter container">
            <div>
                <label htmlFor="sort">Sort</label>
                <select name="sort" onChange={(e) => setSortValue(e.target.value)}>
                    <option value="">-</option>
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                    <option value="plow">Price Low</option>
                    <option value="phigh">Price High</option>
                </select>
            </div>

            <div>
                <label htmlFor="filter">Filter by Category</label>
                <select name="filter" onChange={(e) => {setFilterValue(e.target.value)}}>
                    <option value="">-</option>
                    <option value="Beauty">Beauty</option>
                    <option value="Decor">Decor</option>
                    <option value="Accessories">Accessories</option>
                </select>
            </div>
        </div>
    )
}

export default SortAndFilter
