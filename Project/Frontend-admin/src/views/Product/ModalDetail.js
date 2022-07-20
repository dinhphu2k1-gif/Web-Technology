import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
class ModalDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            image: '',
            description: '',
            price: '',
            year: '',

        }
    }
    componentDidMount() {
        let a = this.props.detailItem;
        console.log('image la :', a.image)
        let b = a.iamge;
        console.log(typeof (b))

        this.setState({
            name: a.name,
            image: a.image,
            description: a.description,
            price: a.price,
            year: a.year,
        })
        console.log('a :', a.image)
        console.log('check :', this.state.image);
    }
    toggle = () => {
        // alert('me toggle')
        this.props.toggleModal()
    }
    // toggle: nút đóng, mở
    // handleOnchaneInput = (event, id) => {
    //     let copyState = { ...this.state };
    //     copyState[id] = event.target.value; // do id đã đặt bằng các trường trong state

    //     this.setState({
    //         ...copyState,
    //     }, () => {
    //         console.log(copyState);
    //     })

    // }
    // checkValideInput = () => {
    //     let isValid = true;
    //     let arrInput = ['name', 'image', 'price', 'year', 'description'];
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
    handleAddNewCar = () => {
        // let isValid = this.checkValideInput();
        // if (isValid === true) {
        //call API
        this.props.createNewCar(this.state);
        // }
        console.log('>>> data modal', this.state)
        this.state = {
            name: '',
            image: '',
            description: '',
            price: '',
            year: '',

        }
    }
    render() {
        // let { a } = this.props.detailItem;
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
                    <ModalHeader toggle={() => this.toggle()}>Chi tiết xe</ModalHeader>
                    <ModalBody>
                        <div className="container">
                            <div className="row">
                                <div className="col-6 ">
                                    <label>Mẫu xe</label>
                                    <div>{this.state.name}</div>
                                </div>
                                <div className="col-6 ">
                                    <label>Hình ảnh</label>
                                    <div>
                                        Hình ảnh này:
                                        <img src={this.state.image} />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6 ">
                                    <label>Giá ($ )</label>
                                    <div>{this.state.price}</div>

                                </div>
                                <div className="col-6 ">
                                    <label>Năm sản xuất</label>
                                    <div>{this.state.year}</div>

                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 ">
                                    <label>Mô tả </label>
                                    <div>
                                        {this.state.description}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        {/* <Button color="primary" onClick={() => this.handleAddNewCar()}>Thêm mới</Button>{' '} */}
                        <Button color="secondary" onClick={() => this.toggle()}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div >
        )
    }
}
export default ModalDetail;