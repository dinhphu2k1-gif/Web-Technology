import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
class ModalEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        }
    }
    componentDidMount() {
        let a = this.props.adminEdit;
        this.setState({
            username: a.username,
            password: a.password,
        })
    }
    toggle = () => {
        // alert('me toggle')
        this.props.toggleFromParent()
    }
    // toggle: nút đóng, mở
    handleOnchaneInput = (event, id) => {
        let copyState = { ...this.state };
        copyState[id] = event.target.value; // do id đã đặt bằng các trường trong state

        this.setState({
            ...copyState,
        }, () => {
            console.log(copyState);
        })

    }
    checkValideInput = () => {
        let isValid = true;
        let arrInput = ['username', 'password'];
        for (let i = 0; i < arrInput.length; i++) {
            console.log('Check inside loop', this.state[arrInput[i]], arrInput[i])
            if (!this.state[arrInput[i]]) {
                isValid = false;
                alert(`Missing parameter ` + arrInput[i]);
                break;
            }
        }
        return isValid;
    }
    handleEdit = () => {
        let isValid = this.checkValideInput();
        if (isValid === true) {
            //call API
            this.props.editAdmin(this.state);
        }
        console.log('>>> data modal', this.state, this.props.adminEdit)
        this.setState({
            username: '',
            password: '',
        })
        this.props.changeOpen();
    }
    toggle = () => {
        this.props.changeOpen();
    }
    render() {

        return (
            <div>
                <Modal
                    isOpen={this.props.isOpen}
                    toggle={() => this.toggle()}
                    className={'abcClassName'}
                    size='lg'
                    centered
                >
                    <ModalHeader toggle={() => this.toggle()}>Sửa thông tin admin</ModalHeader>
                    <ModalBody>
                        <div className="container">
                            <div className="row">
                                <div className="col-6 ">
                                    <label>Tên</label>
                                    <div ><input type="text" style={{ width: '100%' }}
                                        onChange={(event) => this.handleOnchaneInput(event, "username")}
                                        value={this.state.username}
                                    /></div>
                                </div>
                                <div className="col-6 ">
                                    <label>Password</label>
                                    <div><input type="password" style={{ width: '100%' }}
                                        onChange={(event) => this.handleOnchaneInput(event, "password")}
                                        value={this.state.password}
                                    /></div>
                                </div>
                            </div>

                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={() => this.handleEdit()}>Lưu lại</Button>{' '}
                        <Button color="secondary" onClick={() => this.toggle()}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div >
        )
    }
}
export default ModalEdit;