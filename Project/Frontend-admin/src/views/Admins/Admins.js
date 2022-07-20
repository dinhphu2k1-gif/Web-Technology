import React from "react";
import axios from "axios";
import "./Admins.scss";
import { faEye, faPenToSquare, faTrashAlt, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {

    Link, NavLink
} from "react-router-dom";
import ModalAdmin from "./ModalAdmin";
import { createNewAdminService } from "../../services/service";
import { toast } from "react-toastify";
import { deleteAdminService } from "../../services/service";
import ModalEdit from "./ModalEdit";
import { editAdminService } from "../../services/service";
import tonken from "../../services/token";
class Admins extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listAdmins: [],
            isOpenModalAdmin: false,
            isOpenModalEdit: false,
            adminEdit: ' ',
        }
    }
    // Hiển thị danh sách ra view
    async componentDidMount() {
        await this.getAllAdminsService();
    }
    getAllAdminsService = async () => {
        let res = await axios.get('http://localhost:8000/admins', {
            headers: {
                'Authorization': tonken
            }
        });
        this.setState({
            listAdmins: res.data.data,
        })
    }
    // Thêm mới Admin
    handleAddNewUser = () => {
        this.setState({
            isOpenModalAdmin: !this.state.isOpenModalAdmin,
        })
    }
    changeOpen = () => {
        this.setState({
            isOpenModalAdmin: false,
            isOpenModalEdit: false,
        })
    }
    createNewAdmin = async (data) => {
        let res = await createNewAdminService(data);
        // console.log('res ', res)
        await this.getAllAdminsService();
    }
    // Xoá admin
    handleDeleteAdmin = async (user) => {
        // alert('hehe')
        try {
            let a = user.id;
            await deleteAdminService(a);
            await this.getAllAdminsService();
        }
        catch (e) {
            console.log(e)
        }
        await this.getAllAdminsService();
    }
    // Sửa admin
    handleEditAdmin = (admin) => {
        console.log('admin : ', admin);
        this.setState({
            isOpenModalEdit: !this.state.isOpenModalEdit,
        })
        this.setState({
            adminEdit: admin,
        })
    }
    editAdmin = async (data, id) => {
        await editAdminService(data, id);
        await this.getAllAdminsService();
        await this.getAllAdminsService();

    }
    render() {
        let { listAdmins } = this.state;
        return (
            <div className="content">
                <ModalAdmin
                    isOpen={this.state.isOpenModalAdmin}
                    changeOpen={this.changeOpen}
                    createNewAdmin={this.createNewAdmin}
                />
                {this.state.isOpenModalEdit &&
                    <ModalEdit
                        isOpen={this.state.isOpenModalEdit}
                        changeOpen={this.changeOpen}
                        editAdmin={this.editAdmin}
                        adminEdit={this.state.adminEdit}
                    />
                }

                <div className="page-title">Danh sách Admins</div>
                <div className="container-fluid">
                    <div className="btn-warning col-2" style={{ borderRadius: '5%', border: '1px solid grey', cursor: 'pointer', marginBottom: '10px', padding: '5px 5px' }}
                        onClick={() => this.handleAddNewUser()}
                    >Thêm mới Admins</div>
                    <div className="page-content">
                        <div className="row title ">
                            <span className="col-4 ">STT</span>
                            <span className="col-4 ">Tên</span>
                            <span className="col-4 ">Thao tác</span>

                        </div>
                        <div className="row detail-user">
                            {listAdmins && listAdmins.length > 0 &&
                                listAdmins.map((item, index) => {
                                    return (
                                        <>
                                            <div className="col-4 text ">{index + 1}</div>
                                            <div className="col-4 text ">{item.username}</div>
                                            <div className="col-4">
                                                {/* <span><button className="btn-primary edit" onClick={() => this.handleEditAdmin(item)} ><FontAwesomeIcon icon={faPenToSquare} /></button></span> */}
                                                <span>
                                                    <button className="btn-danger" onClick={() => this.handleDeleteAdmin(item)}><FontAwesomeIcon icon={faTrashCan} /></button>

                                                </span>
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
export default Admins;