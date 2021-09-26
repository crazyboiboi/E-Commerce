import React from 'react'
import { Route, Switch, useRouteMatch, useHistory, useLocation } from 'react-router-dom'

import ShopBanner from '../components/ShopBanner'
import CartSummary from '../components/CartSummary'
import Checkout from '../components/Checkout'


const Cart = ({ cart, handleRemoveFromCart, refreshCart }) => {
    let { path, url } = useRouteMatch();
    let history = useHistory();
    let location = useLocation();

    const DisplayShopBanner = () => {
        if (location.pathname === "/cart")
            return <ShopBanner name="Your Cart" />
        else if (location.pathname === "/cart/checkout")
            return <ShopBanner name="Checkout" />
        else
            return <ShopBanner />
    }    

    return (
        <main>
            <DisplayShopBanner />

            <div className="cart container">
                <Switch>
                    <Route exact path={path}>
                        <CartSummary cart={cart} handleRemoveFromCart={handleRemoveFromCart} />
                    </Route>
                    <Route path={`${path}/checkout`}>
                        <Checkout cart={cart} refreshCart={refreshCart} />
                    </Route>
                </Switch>
            </div>
        </main>
    )
}

export default Cart
