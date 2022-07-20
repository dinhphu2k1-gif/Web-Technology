import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
class ModalAdmin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        }
    }
    componentDidMount() {

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
    handleAddNewAdmin = () => {
        let isValid = this.checkValideInput();
        if (isValid === true) {
            //call API
            this.props.createNewAdmin(this.state);
        }
        console.log('>>> data modal', this.state)
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
                    <ModalHeader toggle={() => this.toggle()}>Tạo mới admin</ModalHeader>
                    <ModalBody>
                        <div className="container">
                            <div className="row">
                                <div className="col-6 ">
                                    <label>Tên</label>
                                    <div ><input type="text" style={{ width: '100%' }}
                                        onChange={(event) => this.handleOnchaneInput(event, "username")}

                                    /></div>
                                </div>
                                <div className="col-6 ">
                                    <label>Password</label>
                                    <div><input type="password" style={{ width: '100%' }}
                                        onChange={(event) => this.handleOnchaneInput(event, "password")}

                                    /></div>
                                </div>
                            </div>

                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={() => this.handleAddNewAdmin()}>Thêm mới</Button>{' '}
                        <Button color="secondary" onClick={() => this.toggle()}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div >
        )
    }
}
export default ModalAdmin;