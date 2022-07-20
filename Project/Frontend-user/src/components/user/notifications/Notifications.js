import { Link } from 'react-router-dom'
import './Notifications.css'
import { useEffect } from 'react'
import * as API from '../../../constants/api_config'
import { useState } from 'react'
import no from '../no-product-found.png'

export function Notifications() {
    const [noti, setNoti] = useState([])

    useEffect(() => {
        fetch(API.DOMAIN + API.NOTIFICATIONS, {
            method: 'GET', // or 'PUT'
            headers: {
              'accept': '*/*',
              'Authorization': (window.localStorage.getItem('LCAR_REMEMBER') ? window.localStorage.getItem("LCAR_TOKEN") : window.sessionStorage.getItem("LCAR_TOKEN"))
            },
            credentials: "same-origin",
            // mode: 'no-cors'
          })
          .then(response => {
            return response.json()})
          .then(data => {
            console.log(data)
            if (data?.status == 409) {
                alert(data.message)
            } else if (data?.status == 200) {
                setNoti(data.data)
                console.log(data.data);
            } else {
                alert("ERROR")
            }
          })
          .catch((error) => {
            console.error('Error:', error);
          });
    }, [])

    return (
        <section className="container cart-content-section">
            <h2 className="section-header">NOTIFICATIONS</h2>
            <div className="cart-row">
                <span className="cart-item cart-header cart-column">MESSAGE </span>
                <span className="cart-price cart-header cart-column">CREATED AT</span>
                <span className="cart-quantity cart-header cart-column">STATUS</span>
            </div>
            <div className="cart-items" style={{textAlign:"center"}}>
                {noti &&
                    noti.map((item, id) => {
                      if (id < noti.length) {
                       return <div className="cart-row" key={id}>
                            <div className="cart-item cart-column">
                                <span className="cart-item-title">{item?.message}</span>
                            </div>
                            <span className="cart-price cart-column">{item?.createdAt}</span>
                            <div className="cart-quantity cart-column">
                              {item?.status}
                            </div>
                        </div>
                      }
                    })
                }
                {noti.length === 0 &&
                  <img  src={no} width="300px" height="300px"></img>
                }
            </div>
        </section>
    )
}