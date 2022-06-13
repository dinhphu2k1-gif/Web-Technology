import './Home.css'
import home_image from './images/car.jpeg'

export function Home() {
    return (
        <section className="home">
            <img src={home_image} className="home-img" alt="" />
            <div className="home-content">
                <h1>
                Hãy chọn cho mình <br />
                một chiếc xe thật đẹp.
                </h1>
                <p>
                <strong>Xe rep 1:1 là hàng real </strong>
                <br/>
                Gồm những mẫu xe mới nhất đến tử 5 châu lục địa <br/>
                Bạn hãy thỏa sức khám phá các mẫu xe mới nhất và hot nhât năm nay 
                </p>
                <a href="/products" className="btn">Khám phá ngay </a>
            </div>
        </section>
    )
}