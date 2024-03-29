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
import no from '../no-product-found.png'
import up from './images/up.png'
import './Products.css'
import { Product } from './Product'
import * as API from '../../../constants/api_config'
import { useState, useEffect } from 'react'

export function Products() {

    const [products, setProducts] = useState([])
    const [keyword, setKeyword] = useState("")
    const [sort, setSort] = useState(false)

    useEffect(() => {
        fetch(API.DOMAIN + API.PRODUCTS, {
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
            if (data?.status == 409) {
                alert(data.message)
            } else if (data?.status == 200) {
                setProducts(data.data)
            } else {
                alert("ERROR")
            }
          })
          .catch((error) => {
            console.error('Error:', error);
          });
    }, [])
    
    function handleSort() {
        if (sort) {
            setProducts(objs => {
                objs.sort((a,b) => parseInt(a.price) - parseInt(b.price) > 0 ? 1 : -1);
                return objs
            })
        } else {
            setProducts(objs => {
                objs.sort((a,b) => parseInt(a.price) - parseInt(b.price) > 0 ? -1 : 1);
                return objs
            })
        }
        setSort(s => !s)
    }

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

            <div>
                <input style={{width:"40vw", height:"40px", background:"rgba(255, 255, 255, 0)", border:"1px solid rgba(0, 0, 0, 0.9)"}} placeholder="Bạn muốn tìm mẫu xe nào ?"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                ></input>
                <button className='btn' style={{height:"40px"}} 
                    onClick={() => handleSort()}
                >Sort</button>
            </div>

            <div className="portfolio" style={{textAlign:"center"}}>
                {products &&
                    products.map((product, id) => {
                        if (String(product.name).toLocaleLowerCase().includes(keyword.toLocaleLowerCase())) {
                            return <Product key={product.id} data={{"id":product.id, "name":product.name, "image":product.image, "description":product.description, "price":product.price, "year":product.year}}/>
                        }
                    })
                }
                {products.length === 0 &&
                  <img  src={no} width="300px" height="300px"></img>
                }
            </div>
        </section>
    )
}