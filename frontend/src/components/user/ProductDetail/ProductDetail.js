import './ProductDetail.css'
import p1 from './images/product-1.png'
import p2 from './images/product-2.png'
import p3 from './images/product-3.png'
import p4 from './images/product-4.png'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import * as API from '../../../constants/api_config'
import { useState } from 'react'

export function ProductDetail() {

    const [info, setInfo] = useState([])

    useEffect(() => {
        let id = window.location.href.split('/').at(-1) 
        fetch(API.DOMAIN + API.PRODUCTS + "/" + id, {
            method: 'GET', // or 'PUT'
            headers: {
              'accept': '*/*',
              'Content-Type': 'application/json',
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
                setInfo(data.data)
            } else {
                alert("ERROR")
            }
          })
          .catch((error) => {
            console.error('Error:', error);
          });
    }, [])

    function handleAddItem() {
        fetch(API.DOMAIN + API.CART + "/" + window.localStorage.getItem("LCAR_USER_ID"), {
            method: 'POST', // or 'PUT'
            headers: {
              'accept': '*/*',
              'Content-Type': 'application/json',
              'Authorization': window.localStorage.getItem('LCAR_TOKEN')
            },
            body: JSON.stringify({cart_id: window.localStorage.getItem('LCAR_USER_ID'), product_id: info.id, quantity: "1", total_price: info.price}),
            credentials: "same-origin",
            // mode: 'no-cors'
          })
          .then(response => {
            return response.json()})
          .then(data => {
            if (data?.status == 409 || data?.status == 401) {
                alert(data.message)
            } else if (data?.status == 200) {
                window.location.href = "/cart/" + window.localStorage.getItem('LCAR_USER_ID')
            } else {
                window.location.href = "/cart/" + window.localStorage.getItem('LCAR_USER_ID')
            }
          })
          .catch((error) => {
            console.error('Error:', error);
          });
    }    

    return (
        <div className="container">

            <main>
                <article id="home" className="hero">
                    <div className="left">
                        <h1>{info.name}</h1>
                        <p>
                            <span style={{textDecoration: "line-through", marginRight:"30px"}}>${parseInt(info.price) + 1}M</span>
                            <span>${info.price}M</span>
                        </p>
                        {window.localStorage.getItem("LCAR_TOKEN") &&
                            <button className='btn' type="submit" style={{cursor:"pointer"}}
                                onClick={() => handleAddItem()}
                            >
                                ADD TO CART
                            </button>
                        }
                        {!window.localStorage.getItem("LCAR_TOKEN") &&
                            <div>
                                <button className='btn' type="submit" style={{cursor:"pointer"}}
                                    onClick={() => handleAddItem()}
                                    disabled
                                >
                                    ADD TO CART
                                </button>
                                <br/>
                                <span style={{fontFamily:"cursive"}}>Hãy đăng nhập để thêm sản phẩm vào giỏ hàng </span>
                            </div>
                        }
                    </div>


                    <div className="right">

                        <img className='p-img' src={"data:image/jpeg;base64, " + info.image} alt="White Headphones"/>
                    </div>
                </article>

                <article id="pfeatures">
                    <section className="first">
                        <div className="left">
                            <img className='p-img' src={"data:image/jpeg;base64, " + info.image} alt="Black Headphones"/>
                        </div>
                        <div className="right">
                            <div className='right-menu'>
                                <div>
                                    <h3>ĐỘNG CƠ MẠNH MẼ</h3>
                                    <p>2.0 L -228 HP</p>
                                </div>
                                <div>
                                    <h3>HỘP SỐ TỰ ĐỘNG</h3>
                                    <p>ZF 8 CẤP</p>
                                </div>

                                <div>
                                    <h3>CHIỀU DÀI CƠ SỞ</h3>
                                    <p>2.968 MM</p>
                                </div>
                                
                                <div>
                                    <h3>ĐỘNG CƠ MẠNH MẼ</h3>
                                    <p>2.0 L -228 HP</p>
                                </div>

                                <div>
                                    <h3>HỘP SỐ TỰ ĐỘNG</h3>
                                    <p>ZF 8 CẤP</p>
                                </div>

                                <div>
                                    <h3>CHIỀU DÀI CƠ SỞ</h3>
                                    <p>2.968 MM</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="second">
                        <div className="left">
                            <h3>Sang trọng & tinh tế</h3>
                            <p>Được cấu thành từ nhôm, gỗ và da Nappa thượng hạng, khoang xe tạo cảm giác cao cấp và trang nhã.</p>

                            <h3>Thoải mái tận hưởng</h3>
                            <p>Hai ghế trước chỉnh điện đa hướng cùng ghế sau có độ ngả lý tưởng mang đến sự thư thái trên mọi cung đường.</p>

                            <h3>Tiện nghi tân tiến</h3>
                            <p>Sạc không dây, điều hòa tự động 2 vùng độc lập kiểm soát chất lượng không khí bằng ion, rèm che nắng chỉnh điện, màn hình giải trí 10.4 inch cùng dàn âm thanh 13 loa. Hỗ trợ kết nối Apple Carplay.</p>
                        </div>
                        <div className="right">
                            <img className='p-img' src={"data:image/jpeg;base64, " + info.image} alt="Gold Headphones"/>
                        </div>
                    </section>
                </article>
                
            </main>
            
        </div>
    )
}