import React from 'react'
import { Link } from 'react-router-dom'

const LoginForm = () => {
    return (
        <>
            <div id="login-container">
                <h2 className="md-h text-center">Login</h2>
                <form action="#">
                    <div className="form-content flex-col">
                        <label for="email" className="md-text">Email</label>
                        <input type="email" name="email" placeholder="mahendra@gmail.com" />
                        <label for="password" className="md-text">Password</label>
                        <input type="password" name="password" placeholder="******" />
                        <div className="rember-me">
                            <input type="checkbox" name="remember-me" id="rember-me" />
                            <span className="sm-text">Remember Me</span>
                            <span className="sm-text forget-pass">Forget Your Password?</span>
                        </div>
                        <button className="btn-primary btn">Login</button>
                        <Link to={"/signup"}>
                            <h3 className="sm-text text-center">Create New Account<i className="fa fa-arrow-right md-text"></i></h3>
                        </Link>
                    </div>
                </form>
            </div>
        </>
    )
}

export default LoginForm