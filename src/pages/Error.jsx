import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
    return (
        <main>
            <div className="container error">
                <h1 className="section__title">Oops, it's a dead end</h1>
                <Link to="/" className="btn btn-primary blue">Back to home</Link>
            </div>
        </main>
    )
}

export default Error
