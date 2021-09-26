import React, { useState } from 'react'

import { Link } from 'react-router-dom'
import { ShoppingCart, Menu, Close } from '@material-ui/icons'
import { Badge } from '@material-ui/core'

import Logo from './Logo'

const Navbar = ({ totalItems }) => {
    const [isMenuActive, setIsMenuActive] = useState(false);

    return (
        <header className="header">
            <nav className="navbar">
                {
                    isMenuActive &&
                    <div className="overlay mobile" />
                }

                <Link to="/" className="navbar__logo">
                    <Logo />
                </Link>

                <ul className={`navbar__links ${isMenuActive && "menu-active"}`}>
                    <li>
                        <Link onClick={() => setIsMenuActive(false)} to="/" className="link">Home</Link>
                    </li>
                    <li>
                        <Link onClick={() => setIsMenuActive(false)} to="/shop" className="link">Shop</Link>
                    </li>
                    <li>
                        <Link onClick={() => setIsMenuActive(false)} to="/contact" className="link">Contact</Link>
                    </li>
                    <li>
                        <Link onClick={() => setIsMenuActive(false)} to="/cart" className="link">
                            <Badge badgeContent={totalItems} color="primary">
                                <ShoppingCart />
                            </Badge>
                        </Link>
                    </li>
                </ul>

                {/* Hamburger */}
                <div className="navbar__buttons mobile">
                    {!isMenuActive &&
                        <Badge badgeContent={totalItems} color="primary">
                            <Menu onClick={() => setIsMenuActive(true)} />
                        </Badge>
                    }

                    {isMenuActive &&
                        <Close onClick={() => setIsMenuActive(false)} />
                    }
                </div>
            </nav>
        </header>

    )
}

export default Navbar


// To do
// 1) Add shadow when scrolling