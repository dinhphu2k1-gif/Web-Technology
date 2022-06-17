import './Login.css'
import c1 from './images/c1.png'
import c2 from './images/c2.png'
import { useState } from 'react'
import * as API from '../../../constants/api_config'
import { Link } from 'react-router-dom'

export function Login() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    function handleSignIn() {
        fetch(API.DOMAIN + API.USER_SIGN_IN, {
            method: 'POST', // or 'PUT'
            headers: {
              'accept': '*/*',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({username: username, password: password}),
            credentials: "same-origin",
            // mode: 'no-cors'
          })
          .then(response => {
            return response.json()})
          .then(data => {
            if(data?.status == 200) {
                window.localStorage.setItem("LCAR_TOKEN", data.jwt);
                window.localStorage.setItem("LCAR_USERNAME", username);
                window.localStorage.setItem("LCAR_USER_ID", data.id);
                window.location.href = "/"
            } else if (data?.status == 401) {
                alert(data.message)
            } else {
                alert("ERROR")
            }            
          })
          .catch((error) => {
            console.error('Error:', error);
          });
    }

    return (
        <div>
            <img src={c1} className='login-c1-login-img'></img>    
            <img src={c2} className='login-c2-login-img'></img>    
            <div id="container-login">
                <div id="title">
                Đăng nhập 
                </div>

                <form>
                    <div className="login-input">
                        <div className="login-input-addon">
                        Tài khoản 
                        </div>
                        <input id="username" placeholder="Username" type="text" required className="login-validate" autoComplete="off"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>

                    <div className="login-clearfix"></div>

                    <div className="login-input">
                        <div className="login-input-addon">
                        Mật khẩu 
                        </div>
                        <input id="password" placeholder="Password" type="password" required className="login-validate" autoComplete="off"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div className="login-remember-me">
                        <input type="checkbox"/>
                        <span style={{color: "#333"}}>Remember Me</span>
                    </div>

                    <input type="submit" value="Log In"
                    onClick={(e) => {
                        e.preventDefault()
                        handleSignIn()
                    }}
                    />
                </form>

                <div className="register">
                    Don't have an account yet?
                    <Link to="/register"><button id="register-link">Register here</button></Link>
                </div>
            </div>
        </div>
    )
}