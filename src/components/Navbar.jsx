import React from 'react'

import { Link } from 'react-router-dom'
import { ShoppingCart } from '@material-ui/icons'
import { Badge } from '@material-ui/core'

import logo from '../assets/logo.svg'

import Logo from './Logo'


const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/">
                <Logo />
            </Link>

            <ul className="navbar__links">
                <li>
                    <Link to="/" className="link">Home</Link>
                </li>
                <li>
                    <Link to="/shop" className="link">Shop</Link>
                </li>
                <li>
                    <Link to="/contact" className="link">Contact</Link>
                </li>
                <li>
                    <Link to="/contact" className="link">
                        <Badge badgeContent={2} color="primary">
                            <ShoppingCart />
                        </Badge>
                    </Link>
                </li>
            </ul>


        </nav>
    )
}

export default Navbar


// To do
// 1) Add shadow when scrolling