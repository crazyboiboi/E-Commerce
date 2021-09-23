import React from 'react'

const CartItem = ({ item, onRemoveFromCart }) => {
    return (
        <div className="cart__item">
            <button className="btn btn-circle btn-remove" onClick={()=>onRemoveFromCart(item.id)}>X</button>
            <img src={item.media.source} alt="cart image" />
            <p className="cart__item-name section__paragraph">{item.name}</p>
            <p className="section__paragraph">{item.price.formatted_with_symbol}</p>
            <p className="section__paragraph">{item.quantity}</p>
            <p className="section__paragraph">{item.line_total.formatted_with_symbol}</p>
        </div>
    )
}

export default CartItem
