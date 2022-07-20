import React from "react";
import axios from "axios";
import "./Users.scss";
import { faEye, faPenToSquare, faTrashAlt, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {

    Link, NavLink
} from "react-router-dom";
import ModalUser from "./ModalUser";
import { toast } from "react-toastify";
import { createNewUserService, deleteUserService } from "../../services/service";
import ModalEdit from "./ModalEdit";
import tonken from "../../services/token";
import { editUserService } from "../../services/service";
import Login from "../Login/Login";
class Users extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listUser: [],
            isOpenModalUser: false,
            isOpenModalEdit: false,
            UserEdit: '',
        }
    }
    /** Life cycle 
     * Run component
     * 1. Run construct -> init state
     * 2. Did mount (gán giá trị cho state (gọi api))
     * 3. Render
     * 
     * 
     * 
     */
    async componentDidMount() {
        await this.getAllUserFromReact();
        // console.log('jwt :', Login())

    }
    getAllUserFromReact = async () => {
        let res = await axios.get('http://localhost:8000/users', {
            headers: {
                'Authorization': tonken
            }
        });
        console.log('>>>check res: ', res);
        let res2 = await axios.post('http://localhost:8000/admins/sign_in', { "username": "admin", "password": "123456" });
        console.log('check res 2 :', res2.data)
        this.setState({
            listUser: res.data.data,
        })
    }
    handleAddNewUser = () => {
        // alert('xong cái này mấy cái kia làm tương tự')
        // let a = this.state.isOpenModalUser;
        this.setState({
            isOpenModalUser: true,
        })
    }
    // ChangeState = () => {
    //     this.setState({
    //         isOpenModalUser: false,
    //     })
    // }
    handleEditUser = (user) => {
        // alert('hehe')

        this.setState({
            isOpenModalEdit: true,
            UserEdit: user,
        })
        console.log('Id user edit la: ', this.state.idUserEdit)
    }
    toggleUserModal = () => {
        this.setState({
            isOpenModalUser: !this.state.isOpenModalUser,
        })
    }
    toggleUserEdit = () => {
        this.setState({
            isOpenModalEdit: !this.state.isOpenModalEdit,
        })
    }
    createNewUser = async (data) => { // data được truyền từ component con
        try {
            let res = await createNewUserService(data);
            console.log('res create user: ', res);
            await this.getAllUserFromReact();
            this.setState({
                isOpenModalUser: false,
            })
            toast.success('Thêm thành công')
        } catch (e) {
            console.log(e);
            toast.error('Lỗi trùng lặp')
        }
    }
    editUser = async (data, id) => { // data truyền từ component con ( this.state)
        try {
            console.log('data truyen len la: ', data)
            let res = await axios.put(`http://localhost:8000/users/${id}`, data, {
                headers: {
                    'Authorization': tonken
                }
            });
            console.log('res edit user: ', res);
            await this.getAllUserFromReact();
            this.setState({
                isOpenModalEdit: false,
            });
            // alert('Sửa thành công')
        } catch (e) {
            console.log(e)
        }
    }
    handleDeleteUser = async (user) => { // user là item lấy từ vòng loop trong hàm render
        // window.confirm('Bạn chắc chắn xoá ?');
        if (window.confirm('Bạn chắc chắn xoá ?')) {
            try {
                let a = user.id
                await deleteUserService(a);
                await this.getAllUserFromReact();
                // console.log(res)
                // toast.success('Xoá thành công')
            } catch (e) {
                console.log(e)
            }
        }

        await this.getAllUserFromReact();
    }

    render() {
        let { listUser } = this.state;
        return (
            <div className="content">
                <ModalUser
                    isOpen={this.state.isOpenModalUser}
                    test={'abc'}
                    // ChangeState={this.ChangeState}
                    toggleFromParent={this.toggleUserModal}
                    createNewUser={this.createNewUser}
                />
                {this.state.isOpenModalEdit && <ModalEdit
                    isOpen={this.state.isOpenModalEdit}
                    toggleFromParent={this.toggleUserEdit}
                    UserEdit={this.state.UserEdit}
                    editUser={this.editUser}
                />}


                <div className="page-title">Danh sách người dùng</div>
                <div className="container-fluid">
                    <div className="btn-warning col-2" style={{ borderRadius: '5%', border: '1px solid grey', cursor: 'pointer', marginBottom: '10px', padding: '5px 5px' }}
                        onClick={() => this.handleAddNewUser()}
                    >Thêm mới người dùng</div>
                    <div className="page-content">
                        <div className="row title ">
                            <span className="col-1 ">STT</span>
                            <span className="col-1 ">UserID</span>
                            <span className="col-1 ">Tên</span>
                            <span className="col-2 ">SĐT</span>
                            <span className="col-3 ">Email</span>
                            <span className="col-2 ">Địa chỉ</span>
                            <span className="col-2 ">Thao tác</span>
                        </div>
                        <div className="row detail-user">
                            {listUser && listUser.length > 0 &&
                                listUser.map((item, index) => {
                                    return (
                                        <>
                                            <div className="col-1 text ">{index + 1}</div>
                                            <div className="col-1 text ">{item.id} </div>
                                            <div className="col-1 text ">{item.username} </div>
                                            <div className="col-2 text ">{item.telephone}</div>
                                            <div className="col-3 text ">{item.email}</div>
                                            <div className="col-2 text">
                                                {item.address}
                                            </div>
                                            <div className="col-2">
                                                <span><button className="btn-primary edit" onClick={() => this.handleEditUser(item)} ><FontAwesomeIcon icon={faPenToSquare} /></button></span>
                                                <span>
                                                    <button className="btn-danger" onClick={() => this.handleDeleteUser(item)}><FontAwesomeIcon icon={faTrashCan} /></button>

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
export default Users;