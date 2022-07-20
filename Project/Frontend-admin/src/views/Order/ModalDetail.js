import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
class ModalDetail extends React.Component {
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
        let a = this.props.detailItem;
        this.setState({
            user_id: a.user_id,
            name: a.name,
            telephone: a.telephone,
            address: a.address,
            time_create: a.time_create,
            status: a.status,
        })
        // console.log('list user la: ', this.props.editItem)
        // this.findUser();
        // let a = this.props.editItem;
        // this.setState({
        //     user_id: a.user_id,
        //     name: a.name,
        //     telephone: a.telephone,
        //     address: a.address,
        //     time_create: a.time_create,
        // })
    }
    // findUser = () => {
    //     let a = this.props.listUser;
    //     let b = a.find(x => x.id === 4);
    //     console.log(b);
    // }
    toggle = () => {
        // alert('me toggle')
        this.props.toggleModal()
    }

    render() {
        // let { a } = this.props.editItem;
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
                    <ModalHeader toggle={() => this.toggle()}>Chi tiết đơn hàng</ModalHeader>
                    <ModalBody>
                        <div className="container">
                            <div className="row">
                                <div className="col-6 ">
                                    <label>UserId</label>
                                    <div >{this.state.user_id}</div>

                                </div>
                                <div className="col-6 ">
                                    <label>Tên</label>
                                    <div>{this.state.name}</div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6 ">
                                    <label>SĐT</label>
                                    <div>{this.state.telephone}</div>

                                </div>
                                <div className="col-6 ">
                                    <label>Trạng Thái</label>
                                    <div>
                                        {this.state.status}
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6 ">
                                    <label>Địa chỉ</label>
                                    <div>{this.state.address}</div>
                                </div>
                                <div className="col-6 ">
                                    <label>Thời gian tạo đơn</label>
                                    <div>{this.state.time_create}</div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 ">
                                    <label>Danh sách sản phẩm</label>
                                    <div>{this.state.listProducts}</div>
                                </div>

                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        {/* <Button color="primary" onClick={() => this.handleEdit()}>Lưu</Button>{' '} */}
                        <Button color="secondary" onClick={() => this.toggle()}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div >
        )
    }
}
export default ModalDetail;