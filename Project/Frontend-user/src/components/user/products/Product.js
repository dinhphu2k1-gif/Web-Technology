import item1 from './images/item.jpg'
import hot from './images/hot-item.png'
import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import * as API from '../../../constants/api_config'


export function Product(data) {

    const [info, setInfo] = useState(data.data)

    return (
        <div className='item-holder'>
            <span className='title-item'>{info.name}</span>
            <div className="item">
                <div className='hot-item'>
                    <img className='hot-c-img' src={hot} alt="" />
                    <img className='src-img' src={"data:image/jpeg;base64, " + info.image} alt="" />
                </div>
                <div className="action">
                    <span className='car-min-info'>{info.name}</span>
                    <span className='car-min-info'>${info.price}M</span>
                    <Link to={API.PRODUCTS + "/" + info.id}>Xem</Link>
                </div>
            </div>
        </div>
    )
}