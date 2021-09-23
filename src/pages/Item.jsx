import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

import ShopBanner from '../components/ShopBanner'
import { commerce } from '../lib/commerce';

const Item = () => {
    const [item, setItem] = useState(null);
    const { id } = useParams();

    const getItem = async () => {
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
    }

    useEffect(() => {
        getItem();
    }, [id])

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
                        <div className="amount">
                            <button className="btn btn-circle">-</button>
                            <input defaultValue="1" type="text" />
                            <button className="btn btn-circle">+</button>
                        </div>
                        <button className="btn btn-primary btn-submit">Add to Cart</button>
                    </div>
                </div>
            }
        </main>
    )
}

export default Item
