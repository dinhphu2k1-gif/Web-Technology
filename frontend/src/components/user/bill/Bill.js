import './Bill.css'

export function Bill() {
    return (
        <center>
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
                                        <h3>[Our Company]</h3>
                                        <address>
                                            <pre>
                                                2346 Sector 6 UE <br/>
                                                karnal <br/>
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
                                                <td style={{verticalAlign:"text-top"}}>1526</td>
                                                <td style={{verticalAlign:"text-top"}}>12/01/2020</td>
                                            </tr>
                                            <tr style={{backgroundColor:"#c5ccd8"}}>
                                                <th>Customer id </th>
                                                <th>Terms</th>
                                            </tr>
                                            <tr>
                                                <td style={{verticalAlign:"text-top"}}>554</td>
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
                                                [Ajay Kadoula]
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
                                    <td style={{verticalAlign:"text-top"}}>
                                    <table style={{width:"100%"}}>
                                        <tbody>
                                            <tr style={{backgroundColor:"#c5ccd8", marginLeft:"20px"}}>
                                                <th style={{textAlign:"left"}}>
                                                    <div style={{marginLeft:"20px"}}> PAY TO</div>
                                                </th>
                                            </tr>
                                            <tr>
                                                [Ajay Kadoula]
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
                                    <th> Description</th>
                                    <th>Qty</th>
                                    <th>UNIT PRICE</th>
                                    <th>AMMOUNTS</th>
                                </tr>
                                <tr>
                                    <td>iphone X</td>
                                    <td>3</td>
                                    <td>100000</td>
                                    <td>300000</td>
                                </tr>
                                <tr>
                                    <td>motoX</td>
                                    <td>3</td>
                                    <td>100000</td>
                                    <td>300000</td>
                                </tr>
                                <tr>
                                    <td>one PLus X</td>
                                    <td>2</td>
                                    <td>10000</td>
                                    <td>20000</td>
                                </tr>
                                <tr>
                                    <td>Moto g5</td>
                                    <td>1</td>
                                    <td>10000</td>
                                    <td>10000</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div style={{border:"1px solid grey", marginTop:"20px"}} >
                        <table style={{width:"100%"}}>
                            <tbody>
                                <tr style={{backgroundColor:"#c5ccd8"}}>
                                    <th> Thank your For business </th>
                                    <th>Total=630000</th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <br/><br/><br/><br/>
                </div>
            </div>
        </center>
    )
}