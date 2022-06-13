import './Login.css'

export function Login() {
    return (
        <div id="container-login">
            <div id="title">
            Đăng nhập 
            </div>

            <form>
                <div className="input">
                    <div className="input-addon">
                    Tài khoản 
                    </div>
                    <input id="username" placeholder="Username" type="text" required className="validate" autoComplete="off"/>
                </div>

                <div className="clearfix"></div>

                <div className="input">
                    <div className="input-addon">
                    Mật khẩu 
                    </div>
                    <input id="password" placeholder="Password" type="password" required className="validate" autoComplete="off"/>
                </div>

                <div className="remember-me">
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
    )
}