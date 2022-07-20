import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
class ModalEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: '',
        }
    }
    componentDidMount() {
        let a = this.props.editItem;
        this.setState({
            status: a.status,
        })
    }

    toggle = () => {
        // alert('me toggle')
        this.props.toggleModal()
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
    handleEdit = () => {

        let a = this.props.editItem.id;
        this.props.editBill(this.state, a);
        // // }
        console.log(this.state.status);
        // console.log('>>> data modal', this.state)

        this.setState({
            status: '',
        })

    }
    render() {
        let { a } = this.props.editItem;
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
                    <ModalHeader toggle={() => this.toggle()}>Cập nhật trạng thái đơn</ModalHeader>
                    <ModalBody>
                        <div className="container">

                            <div className="row">

                                <div className="col-6 ">
                                    <label>Trạng Thái</label>
                                    <div>
                                        <select onChange={(event) => this.handleOnchaneStatus(event)}
                                            value={this.state.status}
                                        >

                                            <option>accepted</option>
                                            <option>pending</option>
                                            <option>denied</option>

                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={() => this.handleEdit()}>Lưu</Button>{' '}
                        <Button color="secondary" onClick={() => this.toggle()}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div >
        )
    }
}
export default ModalEdit;