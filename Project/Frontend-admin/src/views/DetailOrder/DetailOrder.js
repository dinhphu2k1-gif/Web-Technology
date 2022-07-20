import React from "react";
import "./DetailOrder.scss";
import {

    Link, NavLink
} from "react-router-dom";
class DetailOrder extends React.Component {
    render() {
        return (
            <div className="content">
                <div className="page-title">Chi tiết đơn hàng</div>
                <div className="container-fluid">
                    <div className="page-content">
                        <div className="row title ">
                            <span className="col-4 ">Mã đơn</span>
                            <span className="col-2 ">Thành tiền</span>
                            <span className="col-2 ">Số lượng</span>
                            <span className="col-2 ">Trạng thái</span>
                            <span className="col-2 ">Thao tác</span>


                        </div>
                        <div className="row detail-order">
                            <div className="col-4 text ">#abcdef</div>
                            <div className="col-2 text ">35000$</div>
                            <div className="col-2 text ">1</div>
                            <div className="col-2 text ">Đang lấy hàng</div>
                            <div className="col-2 text">
                                Xem
                            </div>
                        </div>
                        <div className="detail-description">
                            Tình trạng: Đang lấy hàng <br />
                            Địa chỉ: Hà Nội<br />
                            Tổng tiền: 35000$<br />
                            SĐT khách hàng: 0123456789<br />

                        </div>
                        <Link to="/order">
                            <button className="btn-warning" style={{ margin: "10px 0" }}>Quay lại</button>
                        </Link>
                    </div>





                </div>
            </div>
        )
    }
}
export default DetailOrder;