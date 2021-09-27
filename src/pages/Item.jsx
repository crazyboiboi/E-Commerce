import React, { useState, useEffect, useCallback } from 'react'
import { useParams } from 'react-router-dom'

import ShopBanner from '../components/ShopBanner'
import { commerce } from '../lib/commerce';

const minQuantity = 1;
const maxQuantity = 20;

const Item = ({ onAddToCart }) => {
    const [item, setItem] = useState(null);
    const [quantity, setQuantity] = useState(1);

    const { id } = useParams();

    const handleIncrement = () => {
        const newQuantity = Math.min(Math.max(quantity + 1, minQuantity), maxQuantity);
        setQuantity(newQuantity);
    }

    const handleDecrement = () => {
        const newQuantity = Math.min(Math.max(quantity - 1, minQuantity), maxQuantity);
        setQuantity(newQuantity);
    }

    const handleQuantityType = (value) => {
        const newQuantity = Math.min(Math.max(value, minQuantity), maxQuantity);
        setQuantity(newQuantity);
    }

    const getItem = useCallback(async () => {
        try {
            const item = await commerce.products.retrieve(id);
            if (item) {
                const { id, name, categories, price, description, media } = item;
                const newItem = {
                    id: id,
                    name: name,
                    categories: categories,
                    price: price,
                    description: description,
                    media: media,
                }

                newItem.description = newItem.description.replace(/(<([^>]+)>)/ig, '');

                setItem(newItem);
            } else {
                setItem(null);
            }
        } catch (error) {
            console.log(error);
        }
    }, [id]);

    useEffect(() => {
        getItem();
    }, [id, getItem])

    return (
        <main>
            <ShopBanner name="" />
            {item &&
                <div className="item container">
                    <div className="item__img">
                        <img src={item.media.source} alt="pic" />
                    </div>

                    <div className="item__content">
                        <h1 className="section__title">{item.name}</h1>
                        <span className="price">
                            <strong>{item.price.formatted_with_symbol}</strong><br />
                            {item.categories[0].name}
                        </span>
                        <p>{item.description}</p>
                        <div className="quantity">
                            <button className="btn btn-circle" onClick={() => handleDecrement()}>-</button>
                            <input value={quantity} onChange={e => handleQuantityType(e.target.value)} type="text" />
                            <button className="btn btn-circle" onClick={() => handleIncrement()}>+</button>
                        </div>

                        <button className="btn btn-submit blue" onClick={() => onAddToCart(item.id, quantity)}>Add to Cart</button>
                    </div>
                </div>
            }
        </main>
    )
}

export default Item
