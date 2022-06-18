import './Bills.css'
import { useEffect, useState } from 'react'
import * as API from '../../../constants/api_config'
import no from '../no-product-found.png'

export function Bills() {

    const [items, setItems] = useState([])
    const [change, isChange] = useState(0)

    useEffect(() => { 
        fetch(API.DOMAIN + API.BILL + "/" + window.localStorage.getItem("LCAR_USER_ID"), {
            method: 'GET', // or 'PUT'
            headers: {
              'accept': '*/*',
              'Content-Type': 'application/json',
              'Authorization': window.localStorage.getItem('LCAR_TOKEN'),
            },
            credentials: "same-origin",
            // mode: 'no-cors'
          })
          .then(response => {
            return response.json()})
          .then(data => {
            if (data?.status == 401) {
                alert(data.message)
            } else if (data?.status == 200) {
                (data.data).map(item => {
                    let items = {
                        'bill':item,
                        'cars':[],
                        'price':0
                    }
                    item.list_products.map(product => {
                        fetch(API.DOMAIN + API.PRODUCTS + "/" + product.product_id, {
                            method: 'GET', 
                            headers: {
                              'accept': '*/*',
                              'Content-Type': 'application/json',
                            },
                            credentials: "same-origin",
                            // mode: 'no-cors'
                          })
                          .then(response => {
                            return response.json()})
                          .then(data2 => {
                            if (data2?.status == 404) {
                                alert(data2.message)
                            } else if (data2?.status == 200) {
                                items.cars.push({
                                    "id":product.id,
                                    "quantity":product.quantity,
                                    "total_price":product.total_price,
                                    "unit_price":data2.data.price,
                                    "name":data2.data.name,
                                    "image":data2.data.image
                                })
                                items.price = parseInt(items.price) + parseInt(product.total_price)
                            } else {
                                alert("ERROR")
                            }
                          })
                          .catch((error) => {
                            console.error('Error:', error);
                          });
                    })
                    setItems(_items => [..._items, 
                        items  
                    ])
                })
            } else {
                alert("ERROR")
            }
          })
          .catch((error) => {
            console.error('Error:', error);
          });
    }, [])

    useEffect(() => {
        if(change < items.length + 1) {
            setTimeout(() => {
                isChange(c => 1 + c)
            }, 100);
        }
    }, [change])

    return (
        <div>
            <div>
                {items && 
                    items.map((item, id) => {
                        if (id < items.length / 2) {
                            return ( 
                                <div style={{float:"left", margin:"20px"}} key={id}>
                                    <div style={{width:"100%", display:"flex", flexDirection:"column", boxShadow:"0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)", marginTop:"100px"}}>
                                        <div style={{width:"95%"}}>
                                            <div >
                                                <h2  style={{color:"#c5ccd8"}}>INVOICE</h2>
                                            </div>
                                            <div style={{height:"fit-content", margin:"20px 0px"}} >
                                                <table style={{width:"100%"}}>
                                                    <colgroup>
                                                        <col span="1" style={{width:"50%"}}/>
                                                        <col span="1" style={{width:"50%"}}/>
                                                    </colgroup>
                                                    <tbody>
                                                        <tr>
                                                            <td style={{verticalAlign:"text-top"}}> 
                                                                <h3>[HUST]</h3>
                                                                <address>
                                                                    <pre>
                                                                        1 Dai Co Viet <br/>
                                                                        Hust <br/>
                                                                        Phone no. 98xxxxxxxx
                                                                    </pre>
                                                                </address>
                                                            </td>
                                                            <td style={{verticalAlign:"text-top"}}>
                                                            <table style={{border:"1px solid grey", width:"100%"}}>
                                                                <tbody>
                                                                    <tr style={{backgroundColor:"#c5ccd8"}}>
                                                                        <th>INVOICE# </th>
                                                                        <th>DATE</th>
                                                                    </tr>
                                                                    <tr>
                                                                        <td style={{verticalAlign:"text-top"}}>{item.bill.id}</td>
                                                                        <td style={{verticalAlign:"text-top"}}>{item.bill.time_create}</td>
                                                                    </tr>
                                                                    <tr style={{backgroundColor:"#c5ccd8"}}>
                                                                        <th>Customer id </th>
                                                                        <th>Terms</th>
                                                                    </tr>
                                                                    <tr>
                                                                        <td style={{verticalAlign:"text-top"}}>{item.bill.user_id}</td>
                                                                        <td style={{verticalAlign:"text-top"}}>Net 30 days</td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td style={{verticalAlign:"text-top"}}>
                                                            <table style={{width:"100%"}}>
                                                                <tbody>
                                                                    <tr style={{backgroundColor:"#c5ccd8", marginLeft:"20px"}}>
                                                                        <th style={{textAlign:"left"}}>
                                                                            <div style={{marginLeft:"20px"}}> BILL TO</div>
                                                                        </th>
                                                                    </tr>
                                                                    <tr>
                                                                        [{item.bill.name}]
                                                                    </tr>
                                                                    <tr>
                                                                        [Our Company]
                                                                    </tr>
                                                                    <tr>
                                                                        [{item.bill.address}]
                                                                    </tr>
                                                                    <tr>
                                                                        [City, ST ZIP]
                                                                    </tr>
                                                                    <tr>
                                                                        [{item.bill.telephone}]
                                                                    </tr>
                                                                    <tr>
                                                                        [Email Address]
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                            </td>
                                                            <td style={{verticalAlign:"text-top"}}>
                                                            <table style={{width:"100%"}}>
                                                                <tbody>
                                                                    <tr style={{backgroundColor:"#c5ccd8", marginLeft:"20px"}}>
                                                                        <th style={{textAlign:"left"}}>
                                                                            <div style={{marginLeft:"20px"}}> PAY TO</div>
                                                                        </th>
                                                                    </tr>
                                                                    <tr>
                                                                        [HUST]
                                                                    </tr>
                                                                    <tr>
                                                                        [Our Company]
                                                                    </tr>
                                                                    <tr>
                                                                        [Street Address]
                                                                    </tr>
                                                                    <tr>
                                                                        [City, ST ZIP]
                                                                    </tr>
                                                                    <tr>
                                                                        [Phone No.]
                                                                    </tr>
                                                                    <tr>
                                                                        [Email Address]
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div style={{height:"fit-content", border:"1px solid grey"}} >
                                                <table style={{width:"100%"}}>
                                                    <tbody>
                                                        <tr style={{backgroundColor:"#c5ccd8"}}>
                                                            <th>NAME</th>
                                                            <th>DESCRIPTION</th>
                                                            <th>QUANTITY</th>
                                                            <th>UNIT PRICE</th>
                                                            <th>AMOUNTS</th>
                                                        </tr>
                                                        {
                                                            item.cars.map((car, id) => {
                                                                return (
                                                                    <tr key={id}>
                                                                        <td>{car.name}</td>
                                                                        <td>
                                                                            <img className="cart-item-image" src={"data:image/jpeg;base64, " + car.image} width="100" height="100"/>
                                                                        </td>
                                                                        <td>{car.quantity}</td>
                                                                        <td>{car.unit_price}</td>
                                                                        <td>{car.total_price}</td>
                                                                    </tr>
                                                                )
                                                            })
                                                        }
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div style={{border:"1px solid grey", marginTop:"20px"}} >
                                                <table style={{width:"100%"}}>
                                                    <tbody>
                                                        <tr style={{backgroundColor:"#c5ccd8"}}>
                                                            <th> Thank you For business </th>
                                                            <th>Total={item.price}</th>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <br/>
                                        </div>
                                    </div>
                                </div >
                            )
                        }
                    })
                }
            </div>
            {items.length === 0 &&
            <div style={{textAlign:"center", marginTop:"200px"}}>
                <img  src={no} width="300px" height="300px"></img>
            </div>
            }
        </div>
    )
}