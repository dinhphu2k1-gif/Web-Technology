import { Link } from 'react-router-dom'
import './Cart.css'
import { useEffect } from 'react'
import * as API from '../../../constants/api_config'
import { useState } from 'react'
import { Item } from './Item'

export function Cart() {

    const [items, setItems] = useState([]) 
    const [price, setPrice] = useState(0)

    useEffect(() => {
        let id = window.location.href.slice(-1)
        setItems([])
        setPrice(0)
        fetch(API.DOMAIN + API.CART + "/" + id, {
            method: 'GET', // or 'PUT'
            headers: {
              'accept': '*/*',
              'Content-Type': 'application/json',
              'Authorization': window.localStorage.getItem("LCAR_TOKEN"),
            },
            credentials: "same-origin",
            // mode: 'no-cors'
          })
          .then(response => {
            return response.json()})
          .then(data => {
            if (data?.status == 401) {
                alert(data.message)
            } else if (data?.status == 200) {
                 (data.data).map(item => {
                    fetch(API.DOMAIN + API.PRODUCTS + "/" + item.product_id, {
                        method: 'GET', 
                        headers: {
                          'accept': '*/*',
                          'Content-Type': 'application/json',
                        },
                        credentials: "same-origin",
                        // mode: 'no-cors'
                      })
                      .then(response => {
                        return response.json()})
                      .then(data2 => {
                        if (data2?.status == 404) {
                            alert(data2.message)
                        } else if (data2?.status == 200) {
                            setItems(_items => [..._items, 
                              {
                                'item': item,
                                'car': data2.data,
                              }
                            ])
                        } else {
                            alert("ERROR")
                        }
                      })
                      .catch((error) => {
                        console.error('Error:', error);
                      });
                    setPrice(_price => {
                      return parseInt(_price) + parseInt(item.total_price)
                    })
                })
            } else {
                alert("ERROR")
            }
          })
          .catch((error) => {
            console.error('Error:', error);
          });
    }, [])

    function handleDeleteAll() {
      fetch(API.DOMAIN + API.CART + "/" + window.localStorage.getItem('LCAR_USER_ID'), {
        method: 'DELETE', // or 'PUT'
        headers: {
          'accept': '*/*',
          'Content-Type': 'application/json',
          'Authorization': window.localStorage.getItem('LCAR_TOKEN')
        },
        credentials: "same-origin",
        // mode: 'no-cors'
      })
      .then(response => {
        return response.json()})
      .then(data => {
        if (data?.status == 404) {
            alert(data.message)
        } else if (data?.status == 200) {
          document.location.reload()
        } else {
            alert("ERROR")
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    }

    return (
        <section className="container cart-content-section">
            <h2 className="section-header">CART</h2>
            <div className="cart-row">
                <span className="cart-item cart-header cart-column">ITEM </span>
                <span className="cart-price cart-header cart-column">PRICE</span>
                <span className="cart-quantity cart-header cart-column">QUANTITY
            <button className='btn' style={{marginLeft:"20px"}} 
            onClick={() => handleDeleteAll()}>DELETE ALL</button></span>
            </div>
            <div className="cart-items">
                {items &&
                    items.map((item, id) => {
                      if (id < items.length / 2) {
                        return <Item key={id} data={{"id": item.item.id, "name": item.car.name, "image": item.car.image, "quantity": item.item.quantity, "price": item.item.total_price}}/>
                      }
                    })
                }
            </div>
            <div className="cart-total">
                <strong className="cart-total-title">Total</strong>
                <span className="cart-total-price">${price / 2}</span>
            </div>
            <Link to='/bill' className="btn btn-primary btn-purchase" type="button">PURCHASE</Link>
        </section>
    )
}