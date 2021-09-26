import React from 'react'

import Gallery from '../components/Gallery'
import Sales from '../components/Sales'
import Introduction from '../components/Introduction'
import Newsletter from '../components/Newsletter'

const Separator = ({ bg }) => {
    return <div className="separator" style={{ background: `${bg}` }}></div>
}

const Home = ({ items }) => {    
    return (
        <main>
            <Introduction />
            <Separator bg="hsl(180, 30%, 78%)" />
            <Gallery title="Trending Now" subtitle="Popular items in the market" items={items} />
            <Gallery title="Accessories" subtitle="Category of the day" items={items} category="Accessories" />
            <Separator bg="hsl(180, 30%, 78%)" />
            <Sales />
            <Newsletter />
        </main>
    )
}


Separator.defaultProps = {
    bg: 'white',
}

export default Home
