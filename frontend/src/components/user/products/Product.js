import item1 from './images/item.jpg'
import hot from './images/hot-item.png'
import { useEffect, useState } from "react"


export function Product() {

    return (
        <div className='item-holder'>
            <span className='title-item'>Postcher 2022</span>
            <div className="item">
                <div className='hot-item'>
                    <img className='hot-c-img' src={hot} alt="" />
                    <img className='src-img' src={item1} alt="" />
                </div>
                <div className="action">
                    <span className='car-min-info'>Postcher 2022</span>
                    <span className='car-min-info'>$22M</span>
                    <a href="#">Launch</a>
                </div>
            </div>
        </div>
    )
}