import { Link } from 'react-router-dom'
import './Cart.css'
import car from './images/item.jpg'

export function Cart() {
    return (
        <section className="container cart-content-section">
            <h2 className="section-header">CART</h2>
            <div className="cart-row">
                <span className="cart-item cart-header cart-column">ITEM</span>
                <span className="cart-price cart-header cart-column">PRICE</span>
                <span className="cart-quantity cart-header cart-column">QUANTITY</span>
            </div>
            <div className="cart-items">
            <div className="cart-row">
        <div className="cart-item cart-column">
            <img className="cart-item-image" src={car} width="100" height="100"/>
            <span className="cart-item-title">Music Mug</span>
        </div>
        <span className="cart-price cart-column">$15.67</span>
        <div className="cart-quantity cart-column">
            <input className="cart-quantity-input" type="number" defaultValue="1"/>
            <button className="btn btn-danger" type="button">REMOVE</button>
        </div></div><div className="cart-row">
        <div className="cart-item cart-column">
            <img className="cart-item-image" src={car} width="100" height="100"/>
            <span className="cart-item-title">T-Shirt</span>
        </div>
        <span className="cart-price cart-column">$15.67</span>
        <div className="cart-quantity cart-column">
            <input className="cart-quantity-input" type="number" defaultValue="1"/>
            <button className="btn btn-danger" type="button">REMOVE</button>
        </div></div><div className="cart-row">
        <div className="cart-item cart-column">
            <img className="cart-item-image" src={car} width="100" height="100"/>
            <span className="cart-item-title">Album 3</span>
        </div>
        <span className="cart-price cart-column">$15.67</span>
        <div className="cart-quantity cart-column">
            <input className="cart-quantity-input" type="number" defaultValue="1"/>
            <button className="btn btn-danger" type="button">REMOVE</button>
        </div></div><div className="cart-row">
        <div className="cart-item cart-column">
            <img className="cart-item-image" src={car} width="100" height="100"/>
            <span className="cart-item-title">Album 4</span>
        </div>
        <span className="cart-price cart-column">$15.67</span>
        <div className="cart-quantity cart-column">
            <input className="cart-quantity-input" type="number" defaultValue="1"/>
            <button className="btn btn-danger" type="button">REMOVE</button>
        </div></div></div>
            <div className="cart-total">
                <strong className="cart-total-title">Total</strong>
                <span className="cart-total-price">$62.68</span>
            </div>
            <Link to='/bill' className="btn btn-primary btn-purchase" type="button">PURCHASE</Link>
        </section>
    )
}