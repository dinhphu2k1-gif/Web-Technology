import { useEffect, useState} from 'react'
import item1 from './images/001.png'
import item2 from './images/002.png'
import item3 from './images/003.png'
import item4 from './images/004.png'
import item5 from './images/005.png'
import item6 from './images/006.png'
import logo from './images/logo.png'
import logo1 from './images/logo1.png'
import logo2 from './images/logo2.png'
import logo3 from './images/logo3.png'
import logo4 from './images/logo4.png'
import logo5 from './images/logo5.png'
import './Menu.css'
import * as API from '../../../constants/api_config'

export function Menu() {

    const [noti, setNoti] = useState(0)

    useEffect(() => {
        console.log(window.sessionStorage.getItem('LCAR_TOKEN'))
        console.log((window.localStorage.getItem('LCAR_REMEMBER') ? window.localStorage.getItem("LCAR_TOKEN") : window.sessionStorage.getItem("LCAR_TOKEN")))
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
                
            } else if (data?.status == 200) {
                setNoti(data.data.length)
            } else {
                
            }
          })
          .catch((error) => {
            console.error('Error:', error);
          });
    }, [])

    return (
        <section style={{maxWidth:"100vw"}}>
            <div className="title">
                <h1>Xin chào, {window.localStorage.getItem("LCAR_USERNAME")}</h1>
                <p>
                    Chúc bạn một ngày vui vẻ 
                </p>
            </div>
            <div className="menu-services">
                <a className="menu-service" href='/products'>
                    <div className="menu-icon">
                        <img src={item1} alt="" />
                    </div>
                    <h2>Danh sách xe </h2>
                </a>
                <a className="menu-service" href='/'>
                    <div className="menu-icon">
                        <img src={item2} alt="" />
                    </div>
                    <h2>Trang chủ </h2>
                </a>           
                {(window.localStorage.getItem('LCAR_REMEMBER') ? window.localStorage.getItem("LCAR_TOKEN") : window.sessionStorage.getItem("LCAR_TOKEN")) &&
                    <a className="menu-service" href={'/cart/' + window.localStorage.getItem("LCAR_USER_ID")}>
                        <div className="menu-icon">
                            <img src={item4} alt="" />
                        </div>
                        <h2>Giỏ hàng </h2>
                    </a>                
                }          
                {(window.localStorage.getItem('LCAR_REMEMBER') ? window.localStorage.getItem("LCAR_TOKEN") : window.sessionStorage.getItem("LCAR_TOKEN")) &&
                    <a className="menu-service" href={'/bills/' + window.localStorage.getItem("LCAR_USER_ID")}>
                        <div className="menu-icon">
                            <img src={item5} alt="" />
                        </div>
                        <h2>Hóa đơn </h2>
                    </a>                
                }   
                {(window.localStorage.getItem('LCAR_REMEMBER') ? window.localStorage.getItem("LCAR_TOKEN") : window.sessionStorage.getItem("LCAR_TOKEN")) &&
                    <a className="menu-service" href={'/notifications'}>
                        <div className="menu-icon">
                            <img src={item5} alt="" />
                        </div>
                        <h2>Thông báo mới ({noti}) </h2>
                    </a>                
                }   
                {(window.localStorage.getItem('LCAR_REMEMBER') ? window.localStorage.getItem("LCAR_TOKEN") : window.sessionStorage.getItem("LCAR_TOKEN")) &&
                    <a className="menu-service" href='/'
                        onClick={() => {
                            localStorage.removeItem("LCAR_TOKEN")
                            localStorage.removeItem("LCAR_USERNAME")
                            localStorage.removeItem("LCAR_USER_ID")
                        }}
                    >
                        <div className="menu-icon">
                            <img src={item6} alt="" />
                        </div>
                        <h2>Đăng xuất </h2>
                    </a>                
                }    
                {!(window.localStorage.getItem('LCAR_REMEMBER') ? window.localStorage.getItem("LCAR_TOKEN") : window.sessionStorage.getItem("LCAR_TOKEN")) &&
                    <a className="menu-service" href='/login'>
                        <div className="menu-icon">
                            <img src={item5} alt="" />
                        </div>
                        <h2>Đăng nhập </h2>
                    </a>                
                }
                {!(window.localStorage.getItem('LCAR_REMEMBER') ? window.localStorage.getItem("LCAR_TOKEN") : window.sessionStorage.getItem("LCAR_TOKEN")) &&
                    <a className="menu-service" href='/register'>
                        <div className="menu-icon">
                            <img src={item6} alt="" />
                        </div>
                        <h2>Đăng ký </h2>
                    </a>                 
                }         
            </div>
        </section>
    )
}