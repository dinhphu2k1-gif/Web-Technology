import './Login.css'
import c3 from './images/c3.png'
import c4 from './images/c4.png'
import { useState } from 'react'
import * as API from '../../../constants/api_config'

export function Register() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")

    function handleRegister() {
        fetch(API.DOMAIN + API.USER_REGISTER, {
            method: 'POST', // or 'PUT'
            headers: {
              'accept': '*/*',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({username: username, password: password, telephone: "", email: email, address: ""}),
            credentials: "same-origin",
            // mode: 'no-cors'
          })
          .then(response => {
            return response.json()})
          .then(data => {
            console.log(data)
            if (data?.status == 409) {
                alert(data.message)
            } else if (data?.status == 201) {
                window.localStorage.setItem("LCAR_TOKEN", data.jwt);
                window.localStorage.setItem("LCAR_USERNAME", username);
                window.localStorage.setItem("LCAR_USER_ID", data.id);
                window.location.reload()
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
            <img src={c3} className='login-c1-login-img'></img>
            <img src={c4} className='login-c2-login-img'></img>
            <div id="container-register">
                <div id="title">
                    Register
                </div>

                <form>
                    <div className="login-input">
                        <div className="login-input-addon">
                            Email
                        </div>
                        <input id="email" placeholder="Email" type="email" required className="validate" autoComplete="off"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                        />
                    </div>

                    <div className="clearfix"></div>

                    <div className="login-input">
                        <div className="login-input-addon">
                            Username
                        </div>
                        <input id="username" placeholder="Username" type="text" required className="validate" autoComplete="off"
                        value={username}
                        onChange={(e) => {
                            setUsername(e.target.value)
                        }}
                        />
                    </div>

                    <div className="clearfix"></div>

                    <div className="login-input">
                        <div className="login-input-addon">
                            Password
                        </div>
                        <input id="password" placeholder="Password" type="password" required className="validate" autoComplete="off"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                        />
                    </div>

                    <div className="remember-me">
                        <input type="checkbox"/>
                        <span style={{color:"#333"}}>I accept Terms of Service</span>
                    </div>

                    <input type="submit" value="Register" 
                    onClick={(e) => {
                        e.preventDefault()
                        handleRegister()
                    }}/>
                </form>

                <div className="privacy">
                    <a href="#">Privacy Policy</a>
                </div>

                <div className="register">
                    Do you already have an account?
                    <a href="#"><button id="register-link">Log In here</button></a>
                </div>
            </div>
        </div>
    )
}