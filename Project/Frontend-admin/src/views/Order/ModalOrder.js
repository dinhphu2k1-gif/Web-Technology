import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
class ModalOrder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user_id: '',
            name: '',
            telephone: '',
            address: '',
            time_create: '',
            status: '',
        }
    }
    componentDidMount() {
        console.log('list user la: ', this.props.listUser)
        // this.findUser();
    }
    // findUser = () => {
    //     let a = this.props.listUser;
    //     let b = a.find(x => x.id === 4);
    //     console.log(b);
    // }
    toggle = () => {
        // alert('me toggle')
        this.props.toggleOrderModal()
    }
    // toggle: nút đóng, mở
    handleOnchaneInput = (event, id) => {
        let copyState = { ...this.state };
        copyState[id] = event.target.value
        let c = copyState[id];
        console.log('ID cần tìm: ', c)

        let a = this.props.listUser;
        console.log('List User trong ham inpu la ', a)
        let b = a.find(x => x.id === Number(c));
        console.log('User cần tìm là: ', b);
        // copyState[id] = event.target.value; // do id đã đặt bằng các trường trong state
        copyState[id] = event.target.value
        this.setState({
            user_id: c,
            name: b.username,
            telephone: b.telephone,
            address: b.address,
            time_create: Date().toLocaleString(),
        })


    }
    handleOnchaneStatus = (event) => {
        let a = event.target.value;
        this.setState({
            status: a,
        })
    }
    // checkValideInput = () => {
    //     let isValid = true;
    //     let arrInput = ['username', 'password', 'telephone', 'address', 'email'];
    //     for (let i = 0; i < arrInput.length; i++) {
    //         console.log('Check inside loop', this.state[arrInput[i]], arrInput[i])
    //         if (!this.state[arrInput[i]]) {
    //             isValid = false;
    //             alert(`Missing parameter ` + arrInput[i]);
    //             break;
    //         }
    //     }
    //     return isValid;
    // }
    handleAddNewOrder = () => {
        // alert('hehe')
        // let isValid = this.checkValideInput();
        // if (isValid === true) {
        //call API
        let a = this.state.user_id;
        this.props.createNewOrder(this.state, a);
        // }
        console.log(this.state);
        // console.log('>>> data modal', this.state)

        this.setState({
            username: '',
            password: '',
            telephone: '',
            email: '',
            address: '',
        })

    }
    render() {

        // console.log('>>> check child props', this.props);
        // console.log('>>> check child open modal', this.props.isOpen);
        return (
            <div>
                <Modal
                    isOpen={this.props.isOpen}
                    toggle={() => this.toggle()}
                    className={'abcClassName'}
                    size='lg'
                    centered
                >
                    <ModalHeader toggle={() => this.toggle()}>Tạo mới người dùng</ModalHeader>
                    <ModalBody>
                        <div className="container">
                            <div className="row">
                                <div className="col-6 ">
                                    <label>UserId</label>
                                    <div ><input type="text" style={{ width: '100%' }}
                                        onChange={(event) => this.handleOnchaneInput(event, "user_id")}
                                    // value={this.state.user_id}
                                    /></div>

                                </div>
                                <div className="col-6 ">
                                    <label>Tên</label>
                                    <div><input type="text" style={{ width: '100%' }}
                                        // onChange={(event) => this.handleOnchaneInput(event, "name")}
                                        value={this.state.name}
                                    /></div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6 ">
                                    <label>SĐT</label>
                                    <div><input type="text" style={{ width: '100%' }}
                                        // onChange={(event) => this.handleOnchaneInput(event, "telephone")}
                                        value={this.state.telephone}
                                    /></div>

                                </div>
                                <div className="col-6 ">
                                    <label>Trạng Thái</label>
                                    <div>
                                        <select onChange={(event) => this.handleOnchaneStatus(event)}>
                                            <option> </option>

                                            <option>accepted</option>
                                            <option>pending</option>
                                            <option>denied</option>

                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 ">
                                    <label>Địa chỉ</label>
                                    <div><input type="text" style={{ width: '100%' }}
                                        // onChange={(event) => this.handleOnchaneInput(event, "address")}
                                        value={this.state.address}
                                    /></div>
                                </div>
                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={() => this.handleAddNewOrder()}>Thêm mới</Button>{' '}
                        <Button color="secondary" onClick={() => this.toggle()}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div >
        )
    }
}
export default ModalOrder;