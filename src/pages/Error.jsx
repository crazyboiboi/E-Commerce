import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
    return (
        <main>
            <div className="container">
                <h1>Oops, it's a dead end</h1>
                <Link to="/" className="btn blue">back home</Link>
            </div>
        </main>
    )
}

export default Error
