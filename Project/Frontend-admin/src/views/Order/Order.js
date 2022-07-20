import React from "react";
import axios from "axios";
import "./Order.scss";
import { faEye, faPenToSquare, faTrashAlt, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {

    Link, NavLink
} from "react-router-dom";
import { toast } from "react-toastify";
import { createNewUserService, deleteUserService } from "../../services/service";
import { createNewCarService } from "../../services/service";
import ModalOrder from "./ModalOrder";
import { faTurkishLiraSign } from "@fortawesome/free-solid-svg-icons";
import { createNewOrderService } from "../../services/service";
import ModalEdit from "./ModalEdit";
import { editBillService, deleteBillService } from "../../services/service";
import ModalDetail from "./ModalDetail";
class Order extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listOrder: [],
            listUser: [],
            isOpenModalOrder: false,
            isOpenEdit: false,
            editItem: '',
            isOpenDetail: false,
            detailItem: '',
        }
    }
    // Hiển thị
    async componentDidMount() {
        await this.getAllOrderFromReact();
        await this.getAllUserFromReact();

    }
    getAllOrderFromReact = async () => {
        let res = await axios.get('http://localhost:8000/bills', {
            headers: {
                'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJsb2NhbGhvc3QiLCJpYXQiOjE2NTgyNjgzMTEsImV4cCI6MTY1ODM1NDcxMSwiYXVkIjoibXlhZG1pbnMiLCJpZCI6MSwiaXNfYWRtaW4iOnRydWV9.7wfJVCqi-fsrtrAK6uyWF6yIe2euU2DrkhQgHd0WrYU'
            }
        });
        console.log('>>>check res order ', res.data.data);
        this.setState({
            listOrder: res.data.data,
        })
    }
    getAllUserFromReact = async () => {
        let res = await axios.get('http://localhost:8000/users', {
            headers: {
                'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJsb2NhbGhvc3QiLCJpYXQiOjE2NTgyNjgzMTEsImV4cCI6MTY1ODM1NDcxMSwiYXVkIjoibXlhZG1pbnMiLCJpZCI6MSwiaXNfYWRtaW4iOnRydWV9.7wfJVCqi-fsrtrAK6uyWF6yIe2euU2DrkhQgHd0WrYU'
            }
        });
        console.log('>>>check res user ', res.data.data);
        this.setState({
            listUser: res.data.data,
        })
    }
    // Thêm mới
    handleAddNewCar = () => {
        this.setState({
            isOpenModalOrder: true,
            isOpenEdit: false,
        })

    }
    toggleModal = () => {
        this.setState({
            isOpenModalOrder: false,
            isOpenEdit: false,
            isOpenDetail: false,
        })
    }
    createNewOrder = async (data, id) => { // data được truyền từ component con
        try {
            let res = await createNewOrderService(data, id);
            console.log('res create order: ', res);
            await this.getAllOrderFromReact();
            this.setState({
                isOpenModalOrder: false,
            })
            toast.success('Thêm thành công')
        } catch (e) {
            console.log(e);
            toast.error('Lỗi')
        }
    }
    // Sửa
    handleEdit = (item) => {
        this.setState({
            isOpenEdit: true,
            editItem: item,
        })
        console.log('edit item: ', this.state.editItem)
    }
    editBill = async (data, id) => {
        await editBillService(data, id);
        await this.getAllOrderFromReact();
        await this.getAllOrderFromReact();
        this.setState({
            isOpenEdit: false,
        })
    }
    // Xoá 
    handleDelete = async (item) => {
        console.log('item :', item)
        try {
            let a = item.id;
            let b = item.user_id;
            await deleteBillService(b, a)
        } catch (e) {
            console.log(e)
        }
        await this.getAllOrderFromReact();
    }
    // Hiển thị chi tiết
    handleDetail = (item) => {
        console.log('detail item :', item)
        this.setState({
            isOpenDetail: true,
            detailItem: item,

        })
    }
    render() {
        let { listOrder, listUser } = this.state;
        return (
            <div className="content">
                {this.state.isOpenModalOrder && <ModalOrder
                    listUser={this.state.listUser}
                    isOpen={this.state.isOpenModalOrder}
                    toggleOrderModal={this.toggleModal}
                    createNewOrder={this.createNewOrder}
                />

                }
                {this.state.isOpenEdit &&
                    <ModalEdit
                        isOpen={this.state.isOpenEdit}
                        editItem={this.state.editItem}
                        toggleModal={this.toggleModal}
                        editBill={this.editBill}
                    />
                }
                {this.state.isOpenDetail &&
                    <ModalDetail
                        isOpen={this.state.isOpenDetail}
                        detailItem={this.state.detailItem}
                        toggleModal={this.toggleModal}
                    />

                }
                <div className="page-title">Danh sách đơn hàng</div>
                <div className="container-fluid">
                    {/* <div className="btn-warning col-2" style={{ borderRadius: '5%', border: '1px solid grey', cursor: 'pointer', marginBottom: '10px', padding: '5px 5px' }}
                        onClick={() => this.handleAddNewCar()}
                    >Tạo mới hoá đơn</div> */}
                    <div className="page-content">
                        <div className="row title ">
                            <span className="col-1">STT</span>
                            <span className="col-2 ">User-Id</span>
                            <span className="col-1 ">Bill-Id</span>
                            <span className="col-3 ">Tên</span>

                            <span className="col-2 ">Trạng thái</span>
                            <span className="col-3 ">Thao tác</span>
                        </div>
                        <div className="row detail-user">
                            {listOrder && listOrder.length > 0 &&
                                listOrder.map((item, index) => {
                                    return (
                                        <>
                                            <div className="col-1 text ">{index + 1}</div>
                                            <div className="col-2 text ">{item.user_id}</div>
                                            <div className="col-1 text">{item.id}</div>

                                            <div className="col-3 text">{item.name}</div>

                                            <div className="col-2 text">{item.status}</div>

                                            <div className="col-3">
                                                <span><button className="btn-primary edit" onClick={() => this.handleDetail(item)} ><FontAwesomeIcon icon={faEye} /></button></span>
                                                <span><button className="btn-primary edit" onClick={() => this.handleEdit(item)} ><FontAwesomeIcon icon={faPenToSquare} /></button></span>
                                                <span>
                                                    <button className="btn-danger" onClick={() => this.handleDelete(item)}><FontAwesomeIcon icon={faTrashCan} /></button> </span>
                                            </div>
                                        </>
                                    )
                                })}

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Order;