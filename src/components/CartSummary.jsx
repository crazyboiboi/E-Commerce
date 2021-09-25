import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'

import CartItem from '../components/CartItem'

const CartSummary = ({ cart, handleRemoveFromCart }) => {
    let { url } = useRouteMatch();

    const cartIsLoaded = Object.keys(cart).length;

    return (
        <>
            <div className="cart__header">
                <h2 className="section__title cart__header-item">Item</h2>
                <h2 className="section__title">Price</h2>
                <h2 className="section__title">Quantity</h2>
                <h2 className="section__title">Total</h2>
            </div>

            {
                cartIsLoaded &&
                    cart.line_items.length ?
                    cart.line_items.map((item) => (
                        <CartItem key={item.id} item={item} onRemoveFromCart={handleRemoveFromCart} />
                    ))
                    : <h1 className="cart__empty">Your shopping cart is currently empty!</h1>
            }

            <div className="cart__summary">
                <h4 className="section__tagline">Subtotal </h4>
                <h4 className="section__tagline right"> {cartIsLoaded ? cart.subtotal.formatted_with_symbol : '-'} </h4>
                <h4 className="section__tagline">Discount </h4>
                <h4 className="section__tagline right"> {cartIsLoaded ? (cart.discount.length ? "100%" : "0%") : '-'}</h4>
                <h4 className="section__tagline">Total</h4>
                <h4 className="section__tagline right"> {cartIsLoaded ? cart.subtotal.formatted_with_symbol : '-'} </h4>
            </div>

            <div className="cart__footer">
                <Link to="/" className="btn btn-submit darkgray">Back</Link>
                <Link to={`${url}/checkout`} className="btn btn-submit blue">Next</Link>
            </div>

        </>
    )
}

export default CartSummary
