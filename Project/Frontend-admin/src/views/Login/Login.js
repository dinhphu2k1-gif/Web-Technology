import React, { Component } from 'react';
import axios from 'axios';
import 'font-awesome/css/font-awesome.min.css';
import './Login.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LoginAdmin } from '../../services/service';
import {
    withRouter, BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom"; // hàm chuyển trang
import { type } from '@testing-library/user-event/dist/type';
import Nav from '../Nav/Nav';

import Product from '../Product/Product';
import Order from '../Order/Order';
import AddNewProduct from '../AddNewProduct/AddNewProduct.js';
import Users from '../Users/Users';
import Admins from '../Admins/Admins';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            isShowPass: false,
            errMessage: '',
            isLoggin: false,
        }
    }
    handleOnChangeInput = (event) => {
        this.setState({   // hàm này để set lại value cho state (username)
            username: event.target.value,

        })
        // console.log(event.target.value) //cái target để lấy giá trị của đối tượng trong state

    }
    handleOnChangePassword = (event) => {
        this.setState({   // hàm này để set lại value cho state (username)
            password: event.target.value,

        })
        // console.log(event.target.value) //cái target để lấy giá trị của đối tượng trong state
    }
    handleShowHidePassword = () => {
        // alert('hehehe')
        this.setState({
            isShowPass: !this.state.isShowPass
        })
    }
    handleLogin = async () => {
        console.log(this.state)
        try {
            let res = await LoginAdmin(this.state);
            console.log('check res :', res);
            // console.log('message :', this.state.errMessage)
            if (res && res.data.status === 200) {
                this.setState({
                    isLoggin: true,
                })
            }
        } catch (e) {
            console.log(e);
            this.setState({
                errMessage: 'Wrong username or Password'
            })
        }
        console.log(this.state)
    }
    render() {
        return ( //phải render ra một khối
            <>
                <div className='login-background'>
                    <div className='login-container'>
                        <div className='login-content'>
                            <div className='col-12 text-login' style={{ color: 'black' }}>Login Admin</div>
                            {/* Username */}
                            <div className='col-12 form-group login-input'>
                                <label style={{ color: 'grey' }}>Username:</label>
                                <input type='text' className='form-control'
                                    placeholder='Enter your username'
                                    value={this.state.username}
                                    onChange={(event) => this.handleOnChangeInput(event)} />
                            </div>
                            {/* Password */}
                            <div className='col-12 form-group login-input'>
                                <label style={{ color: 'grey' }}>Password:</label>
                                <div className='custom-input-password'>
                                    <span><input type={this.state.isShowPass ? 'text' : 'password'} className='form-control'
                                        placeholder='Enter your password'
                                        onChange={(event) => this.handleOnChangePassword(event)} /> </span>

                                    <span>
                                        <div onClick={() => this.handleShowHidePassword()}><p style={{ color: 'grey', cursor: 'pointer' }}>Show/Hide Password</p></div>

                                        {/* cai nay de an hien password */}
                                    </span>

                                </div>
                            </div>
                            <div className='col-12' style={{ color: 'red' }}>
                                {this.state.errMessage}
                            </div>
                            {/* Nut login */}
                            <div className='col-12 '>
                                <button className='btn-login' onClick={() => this.handleLogin()}>Login</button>
                            </div>

                            <div className='col-12'>
                                <span className='forgot-password '>Forgot your password ?</span>
                            </div>
                            <div className='col-12 text-center'>
                                <span className='text-other-login mt-3'>Or login with:</span>
                            </div>

                        </div>
                    </div>
                </div>
            </>
        )
    }
}


export default withRouter(Login);
