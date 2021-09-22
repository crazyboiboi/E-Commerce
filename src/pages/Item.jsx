import React from 'react'

import ShopBanner from '../components/ShopBanner'

import pic from '../assets/bag.png'

const Item = () => {
    return (
        <main>
            <ShopBanner name="" />

            <div className="item container">
                <div className="item__img">
                    <img src={pic} alt="pic" />
                </div>

                <div className="item__content">
                    <h1 className="section__title">Backpack</h1>
                    <span className="price"><strong>$29.90</strong> <br /> Accesories</span>
                    <p>Suspendisse varius, libero sed pharetra condimentum, risus odio rhoncus libero, a ultrices odio turpis vel
                        elit. Aenean in accumsan magna, sit amet facilisis leo.</p>
                    <div className="amount">
                        <button className="btn btn-circle">-</button>
                        <input defaultValue="1" type="text" />
                        <button className="btn btn-circle">+</button>
                    </div>
                    <button className="btn btn-primary btn-submit">Add to Cart</button>
                </div>
            </div>
        </main>
    )
}

export default Item
