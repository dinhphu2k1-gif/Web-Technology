

export function Register() {
    return (
        <div id="container-register">
            <div id="title">
                Register
            </div>

            <form>
                <div className="input">
                    <div className="input-addon">
                        Email
                    </div>
                    <input id="email" placeholder="Email" type="email" required className="validate" autoComplete="off"/>
                </div>

                <div className="clearfix"></div>

                <div className="input">
                    <div className="input-addon">
                        Username
                    </div>
                    <input id="username" placeholder="Username" type="text" required className="validate" autoComplete="off"/>
                </div>

                <div className="clearfix"></div>

                <div className="input">
                    <div className="input-addon">
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
    )
}