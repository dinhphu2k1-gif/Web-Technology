import item1 from './images/portfolio-item1.jpg'
import item2 from './images/portfolio-item2.jpg'
import item3 from './images/portfolio-item3.jpg'
import item4 from './images/portfolio-item4.jpg'
import item5 from './images/portfolio-item5.jpg'
import item6 from './images/portfolio-item6.jpg'
import item7 from './images/portfolio-item7.jpg'
import item8 from './images/portfolio-item8.jpg'
import item9 from './images/portfolio-item9.jpg'
import item10 from './images/portfolio-item10.jpg'
import item11 from './images/portfolio-item11.jpg'
import item12 from './images/portfolio-item12.jpg'
import item13 from './images/portfolio-item13.jpg'
import item14 from './images/portfolio-item14.jpg'
import item15 from './images/portfolio-item15.jpg'
import item16 from './images/portfolio-item16.jpg'
import car from './images/car.jpg'
import hot from './images/hot.png'
import sale from './images/sale.png'
import up from './images/up.png'
import './Products.css'
import { Product } from './Product'

export function Products() {
    return (
        <section style={{maxWidth:"70vw"}}>
            <img src={car} className="car-img" alt="" />
            <img src={hot} className="hot-img" alt="" />
            <a href='#'>
                <img src={up} className="up-img" alt="" />
            </a>
            <div className="title">
                <h1>Các mẫu xe hot nhất 2022 </h1>
            </div>

            <div className="portfolio">
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
            </div>
        </section>
    )
}