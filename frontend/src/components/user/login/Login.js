import './Login.css'
import c1 from './images/c1.png'
import c2 from './images/c2.png'

export function Login() {
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
                        <input id="username" placeholder="Username" type="text" required className="login-validate" autoComplete="off"/>
                    </div>

                    <div className="login-clearfix"></div>

                    <div className="login-input">
                        <div className="login-input-addon">
                        Mật khẩu 
                        </div>
                        <input id="password" placeholder="Password" type="password" required className="login-validate" autoComplete="off"/>
                    </div>

                    <div className="login-remember-me">
                        <input type="checkbox"/>
                        <span style={{color: "#333"}}>Remember Me</span>
                    </div>

                    <input type="submit" value="Log In" />
                </form>

                <div className="register">
                    Don't have an account yet?
                    <a href="#"><button id="register-link">Register here</button></a>
                </div>
            </div>
        </div>
    )
}