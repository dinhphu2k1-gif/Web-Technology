import './Login.css'
import c3 from './images/c3.png'
import c4 from './images/c4.png'

export function Register() {
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
                        <input id="email" placeholder="Email" type="email" required className="validate" autoComplete="off"/>
                    </div>

                    <div className="clearfix"></div>

                    <div className="login-input">
                        <div className="login-input-addon">
                            Username
                        </div>
                        <input id="username" placeholder="Username" type="text" required className="validate" autoComplete="off"/>
                    </div>

                    <div className="clearfix"></div>

                    <div className="login-input">
                        <div className="login-input-addon">
                            Password
                        </div>
                        <input id="password" placeholder="Password" type="password" required className="validate" autoComplete="off"/>
                    </div>

                    <div className="remember-me">
                        <input type="checkbox"/>
                        <span style={{color:"#333"}}>I accept Terms of Service</span>
                    </div>

                    <input type="submit" value="Register" />
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