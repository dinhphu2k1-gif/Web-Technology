import './ProductDetail.css'
import p1 from './images/product-1.png'
import p2 from './images/product-2.png'
import p3 from './images/product-3.png'
import p4 from './images/product-4.png'
import { Link } from 'react-router-dom'

export function ProductDetail() {
    return (
        <div className="container">

            <main>
                <article id="home" className="hero">
                    <div className="left">
                        <h1>VINFAST LUX A2.0</h1>
                        <p>
                            <span style={{textDecoration: "line-through", marginRight:"30px"}}>$10000</span>
                            <span>$8999</span>
                        </p>
                        <button type="submit">


                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                                stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                className="feather feather-shopping-cart"
                                style={{marginRight: "5px", verticalAlign: "text-bottom"}}>
                            </svg>
                            <Link to='/cart' style={{verticalAlign: "text-bottom", textDecoration:"none", color:"#ccc", padding:"20px 30px"}}>ADD TO CART</Link>
                        </button>
                    </div>


                    <div className="right">

                        <img className='p-img' src={p1} alt="White Headphones"/>
                    </div>
                </article>

                <article id="pfeatures">
                    <section className="first">
                        <div className="left">
                            <img className='p-img' src={p2} alt="Black Headphones"/>
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
                            <img className='p-img' src={p3} alt="Gold Headphones"/>
                        </div>
                    </section>
                </article>
                
            </main>
            
        </div>
    )
}