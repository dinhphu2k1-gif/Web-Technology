import logo from './logo.svg';
import './App.scss';
import Nav from './Nav/Nav';
import 'font-awesome/css/font-awesome.min.css';
import Home from './HomePage/Home.js';
import Product from './Product/Product';
import Order from './Order/Order';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Users from './Users/Users';
import Admins from './Admins/Admins';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";

import Login from './Login/Login';
import React from 'react';
import { LoginAdmin } from '../services/service';

// import ChildComponent from './Example/ChildComponent';
class App extends React.Component {
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
  componentDidMount() {
    console.log(this.state)
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
      let data = {
        username: this.state.username,
        password: this.state.password
      }
      let res = await LoginAdmin(data);
      console.log('check res :', res);
      // console.log('message :', this.state.errMessage)
      if (res && res.data.status === 200) {
        // this.props.history.push('/home')

        this.setState({
          isLoggin: true,
        })
        // browserHistory.push("/home");
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
    return (

      <div> <Router>
        <div className="App-hoi-Phong">

          <header className="App-header">
            {this.state.isLoggin ?
              <Switch>
                <Route path="/" exact>
                  <Nav
                    isLoggin={this.state.isLoggin}
                  />
                  <Home />
                </Route>
                <Route path="/list-product">
                  <Nav />
                  <Product />
                </Route>
                <Route path="/order">
                  <Nav />
                  <Order />
                </Route>
                <Route path="/all-users">
                  <Nav />
                  <Users></Users>
                </Route>
                <Route path="/all-admins">
                  <Nav />
                  <Admins />
                </Route>
              </Switch>
              : <>
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
            }

          </header>

          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />

        </div>
      </Router></div>
    );
  }

}

export default App;
