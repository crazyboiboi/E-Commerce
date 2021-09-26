import React from 'react'
import { Link } from 'react-router-dom'
import { Facebook, Instagram, Twitter, Pinterest, Room, Phone, Email } from '@material-ui/icons'

import Logo from '../components/Logo'

const Footer = () => {
    return (
        <footer className="footer container">
            <div className="email">
                <p><Email />Email</p>
                <span>commerce@gmail.com</span>
            </div>            

            <div className="address">
                <p><Room /> Address</p>
                <span>14 Wagon St. Columbia, MD 21044, US</span>
            </div>

            <div className="phone">
                <p><Phone />Contact Number</p>
                <span>+8319284891</span>
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

            <div className="logo">
                <Link to="/">
                    <Logo color="white" />
                </Link>
                <p>Copyright &copy; 2021 Commerce</p>
            </div>
        </footer>
    )
}

export default Footer
