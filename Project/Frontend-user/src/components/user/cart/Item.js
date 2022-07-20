import { useState } from 'react'
import car from './images/item.jpg'
import * as API from '../../../constants/api_config'
import { Link } from 'react-router-dom';

export function Item(data) {

  const [info, setInfo] = useState(data.data)
  const [quantity, setQuantity] = useState(data.data.quantity)

  function handleRemoveItem() {
    fetch(API.DOMAIN + API.CART + "/" + window.localStorage.getItem('LCAR_USER_ID') + '/' + info.id, {
      method: 'DELETE', // or 'PUT'
      headers: {
        'accept': '*/*',
        'Content-Type': 'application/json',
        'Authorization': (window.localStorage.getItem('LCAR_REMEMBER') ? window.localStorage.getItem("LCAR_TOKEN") : window.sessionStorage.getItem("LCAR_TOKEN"))
      },
      credentials: "same-origin",
      // mode: 'no-cors'
    })
      .then(response => {
        return response.json()
      })
      .then(data => {
        if (data?.status == 404) {
          alert(data.message)
        } else if (data?.status == 200) {
          document.getElementById('back-cart').click()
          setInfo(false)
        } else {
          alert("ERROR")
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  function handleChangeQuantity(qtt) {
    fetch(API.DOMAIN + API.CART + "/" + window.localStorage.getItem('LCAR_USER_ID') + '/' + info.id, {
      method: 'PUT', // or 'PUT'
      headers: {
        'accept': '*/*',
        'Content-Type': 'application/json',
        'Authorization': (window.localStorage.getItem('LCAR_REMEMBER') ? window.localStorage.getItem("LCAR_TOKEN") : window.sessionStorage.getItem("LCAR_TOKEN"))
      },
      body: JSON.stringify({ quantity: qtt, total_price: qtt * info.price / quantity }),
      credentials: "same-origin",
      // mode: 'no-cors'
    })
      .then(response => {
        return response.json()
      })
      .then(data => {
        if (data?.status == 404) {
          alert(data.message)
        } else if (data?.status == 200) {
          document.getElementById('back-cart').click()
          setInfo(false)
        } else {
          alert("ERROR")
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  return (
    <div>
      {info &&
        <div className="cart-row">
          <div className="cart-item cart-column">
            <img className="cart-item-image" src={info.image} width="100" height="100" />
            <span className="cart-item-title">{info.name}</span>
          </div>
          <span className="cart-price cart-column">${info.price}</span>
          <div className="cart-quantity cart-column">
            <input className="cart-quantity-input" type="number" min="1" value={quantity}
              onChange={(e) => {
                handleChangeQuantity(e.target.value)
              }}
            />
            <button className="btn btn-danger" type="button"
              onClick={() => handleRemoveItem()}
            >REMOVE</button>
          </div>
          <a id="back-cart" href={"/cart/" + window.localStorage.getItem("LCAR_USER_ID")}></a>
        </div>
      }
    </div>
  )
}