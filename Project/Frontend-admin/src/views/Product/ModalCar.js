import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
// import Form from "react-bootstrap";
// import FormGroup from "react-bootstrap";
// import Label from "react-bootstrap";
import { FormControl, FormGroup, Form } from "react-bootstrap";
class ModalCar extends React.Component {
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

    }
    toggle = () => {
        // alert('me toggle')
        this.props.toggleCarModal()
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
    handleOnchaneInputImage = (event) => {
        let upfile = event.target.files[0];
        console.log(upfile);
        const reader = new FileReader();
        const scope = this
        reader.onload = function () {
            scope.setState({
                image: reader.result
            })
        }
        if (upfile) {
            reader.readAsDataURL(upfile);
            let a = reader.result;
        }
        console.log(this.state.image)

    }

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
                    <ModalHeader toggle={() => this.toggle()}>Thêm mới xe</ModalHeader>
                    <ModalBody>
                        <div className="container">
                            <div className="row">
                                <div className="col-6 ">
                                    <label>Mẫu xe</label>
                                    <div ><input type="text" style={{ width: '100%' }}
                                        onChange={(event) => this.handleOnchaneInput(event, "name")}
                                        value={this.state.name}
                                    /></div>
                                </div>
                                <div className="col-6 ">

                                    <label>Hình ảnh</label>
                                    <div>
                                        <input type="file" id="myfile" name="myfile"
                                            onChange={(event) => this.handleOnchaneInputImage(event)}
                                        />
                                        <img src={this.state.image} />
                                    </div>

                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6 ">
                                    <label>Giá (triệu đồng )</label>
                                    <div><input type="text" style={{ width: '100%' }}
                                        onChange={(event) => this.handleOnchaneInput(event, "price")}
                                        value={this.state.price}
                                    /></div>

                                </div>
                                <div className="col-6 ">
                                    <label>Năm sản xuất</label>
                                    <div><input type="text" style={{ width: '100%' }}
                                        onChange={(event) => this.handleOnchaneInput(event, "year")}
                                        value={this.state.year}
                                    /></div>

                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 ">
                                    <label>Mô tả </label>
                                    <div>
                                        <textarea type="text" style={{ width: '100%' }}
                                            onChange={(event) => this.handleOnchaneInput(event, "description")} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={() => this.handleAddNewCar()}>Thêm mới</Button>{' '}
                        <Button color="secondary" onClick={() => this.toggle()}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div >
        )
    }
}
export default ModalCar;