import React from 'react'
import { Link } from 'react-router-dom'
import { Facebook, Instagram, Twitter, Pinterest, Room, Phone, Email } from '@material-ui/icons'

import Logo from '../components/Logo'

const Footer = () => {
    return (
        <footer className="footer container">
            <p className="email">
                <span><Email />Email</span>
                commerce@gmail.com
            </p>

            <p className="address">
                <span><Room /> Address</span>
                20, Blue Street, New York City, YAH 291, US
            </p>

            <p className="phone">
                <span><Phone />Contact Number</span>
                +8319284891
            </p>

            <div className="logo">
                <Link to="/">
                    <Logo color="white" />
                </Link>
                <p>Copyright &copy; 2021 Commerce</p>
            </div>

            <ul className="socials">
                <li>
                    <Link to="/" className="link"><Facebook style={{ fontSize: '36px' }} /></Link>
                </li>
                <li>
                    <Link to="/" className="link"><Instagram style={{ fontSize: '36px' }} /></Link>
                </li>
                <li>
                    <Link to="/" className="link"><Twitter style={{ fontSize: '36px' }} /></Link>
                </li>
                <li>
                    <Link to="/" className="link"><Pinterest style={{ fontSize: '36px' }} /></Link>
                </li>
            </ul>



        </footer>
    )
}

export default Footer
