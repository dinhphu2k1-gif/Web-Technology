import { Link } from 'react-router-dom'
import './Cart.css'
import { useEffect } from 'react'
import * as API from '../../../constants/api_config'
import { useState } from 'react'
import { Item } from './Item'
import no from '../no-product-found.png'

export function Cart() {

    const [items, setItems] = useState([]) 
    const [price, setPrice] = useState(0)
    const [change, isChange] = useState(1)

    function reload() {
      
    }

    useEffect(() => {
      let id = window.location.href.split('/').at(-1) 
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
    }, [change])

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
          isChange(change => 1 + change)
        } else {
            alert("ERROR")
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    }

    function handleRemoveItem(id) {
      fetch(API.DOMAIN + API.CART + "/" + window.localStorage.getItem('LCAR_USER_ID') + '/' + id, {
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
            isChange(change => 1 + change)
          } else {
              alert("ERROR")
          }
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }

    function handleChangeQuantity(qtt, item) {
      console.log(qtt)
        fetch(API.DOMAIN + API.CART + "/" + window.localStorage.getItem('LCAR_USER_ID') + '/' + item.item.id, {
            method: 'PUT', // or 'PUT'
            headers: {
              'accept': '*/*',
              'Content-Type': 'application/json',
              'Authorization': window.localStorage.getItem('LCAR_TOKEN')
            },
            body: JSON.stringify({quantity: qtt, total_price: qtt * item.item.total_price / item.item.quantity}),
            credentials: "same-origin",
            // mode: 'no-cors'
          })
          .then(response => {
            return response.json()})
          .then(data => {
            if (data?.status == 404) {
                alert(data.message)
            } else if (data?.status == 200) {
                isChange(change => 1 + change)
            } else {
                alert("ERROR")
            }
          })
          .catch((error) => {
            console.error('Error:', error);
          });
    }

    function handleCheckOut() {
        const now = new Date()
        fetch(API.DOMAIN + API.BILL + '/' + window.localStorage.getItem('LCAR_USER_ID'), {
          method: 'POST', // or 'PUT'
          headers: {
            'accept': '*/*',
            'Content-Type': 'application/json',
            'Authorization': window.localStorage.getItem('LCAR_TOKEN')
          },
          body: JSON.stringify({user_id: window.localStorage.getItem('LCAR_USER_ID'), name: window.localStorage.getItem('LCAR_USERNAME'), telephone:'0123123123', address:'Vietnam', time_create: now.toISOString().slice(0, 10) + ' ' + now.toLocaleTimeString().slice(0, 8), status:"pending"}),
          credentials: "same-origin",
          // mode: 'no-cors'
        })
        .then(response => {
          return response.json()})
        .then(data => {
          if (data?.status == 409 || data?.status == 401) {
              alert(data.message)
          } else if (data?.status == 201) {
              window.location.href = '/bills/' + window.localStorage.getItem('LCAR_USER_ID')
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
            <div className="cart-items" style={{textAlign:"center"}}>
                {items &&
                    items.map((item, id) => {
                      if (id < (change == 1 ? items.length / 2 : items.length)) {
                       return <div className="cart-row" key={id}>
                            <div className="cart-item cart-column">
                                <img className="cart-item-image" src={"data:image/jpeg;base64, " + item.car.image} width="100" height="100"/>
                                <span className="cart-item-title">{item.car.name}</span>
                            </div>
                            <span className="cart-price cart-column">${item.item.total_price}M</span>
                            <div className="cart-quantity cart-column">
                                <input className="cart-quantity-input" type="number" min="1" defaultValue={item.item.quantity}
                                    onChange={(e) => {
                                        handleChangeQuantity(e.target.value, item)
                                    }}
                                />
                                <button className="btn btn-danger" type="button"
                                    onClick={() => handleRemoveItem(item.item.id)}
                                >REMOVE</button>
                            </div>
                            <a id="back-cart" href={"/cart/" + window.localStorage.getItem("LCAR_USER_ID")}></a>
                        </div>
                      }
                    })
                }
                {items.length === 0 &&
                  <img  src={no} width="300px" height="300px"></img>
                }
            </div>
            <div className="cart-total">
                <strong className="cart-total-title">Total</strong>
                <span className="cart-total-price">${(change == 1 ? price / 2 : price)}M</span>
            </div>
            <button to='/bill' className="btn btn-primary btn-purchase" type="button"
              onClick={() => handleCheckOut()}
            >PURCHASE</button>
        </section>
    )
}