import item1 from './images/001.png'
import item2 from './images/002.png'
import item3 from './images/003.png'
import item4 from './images/004.png'
import item5 from './images/005.png'
import item6 from './images/006.png'
import './Menu.css'

export function Menu() {
    return (
        <section style={{maxWidth:"100vw"}}>
            <div className="title">
                <h1>Xin chào, </h1>
                <p>
                Chúc bạn một ngày vui vẻ 
                </p>
            </div>
            <div className="services">
                <a className="service" href='/products'>
                    <div className="icon">
                        <img src={item1} alt="" />
                    </div>
                    <h2>Danh sách xe </h2>
                </a>
                <a className="service" href='/'>
                    <div className="icon">
                        <img src={item2} alt="" />
                    </div>
                    <h2>Trang chủ </h2>
                </a>                
                <a className="service" href='/products'>
                    <div className="icon">
                        <img src={item3} alt="" />
                    </div>
                    <h2>Trang cá nhân </h2>
                </a>                
                <a className="service" href='/products'>
                    <div className="icon">
                        <img src={item4} alt="" />
                    </div>
                    <h2>Giỏ hàng </h2>
                </a>                
                <a className="service" href='/login'>
                    <div className="icon">
                        <img src={item5} alt="" />
                    </div>
                    <h2>Đăng nhập </h2>
                </a>                
                <a className="service" href='/register'>
                    <div className="icon">
                        <img src={item6} alt="" />
                    </div>
                    <h2>Đăng ký </h2>
                </a>            
            </div>
        </section>
    )
}