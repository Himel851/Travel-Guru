import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { FacebookLoginButton } from "react-social-login-buttons";
import loginImg from "../images/login.jpg"

const Login = () => {
    return (
        <div class="login text-left">
            <img class="img-responsive" src={loginImg} style={{ height: '600px', width: '100%' }} />
            <div class="loginForm ">
                <form className="login-form">
                    <h2 className="text">Welcome</h2>
                    <FormGroup>
                        <Label className="text">Email</Label>
                        <Input type="email" placeholder="Email" />
                    </FormGroup>
                    <FormGroup>
                        <Label className="text mt-3">Password</Label>
                        <Input type="password" placeholder="Password" />
                    </FormGroup>
                    <button className="btn-lg btn-success mt-3 btn-block">
                        Log In
                    </button>
                    <div className="text pt-3">
                        Or continue with your social account.
                    </div>
                    <FacebookLoginButton className="mt-3 mb-3" />
                    <div className="text-center">
                        <a href="#">Sign up</a>
                        <span className="p-2">|</span>
                        <a href="#">Forgot Password</a>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
