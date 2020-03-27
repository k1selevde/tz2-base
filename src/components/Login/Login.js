import React from 'react'
import {Redirect} from 'react-router-dom'
import s from './Login.module.css'
import Alert from "../Alert";

class Login extends React.Component {
    constructor(props) {
        super();
        this.state = {

        }
    }

    submitHandler = e => {
        e.preventDefault();
        const {username, password} = this.state;
        // dispatch here
        this.props.logIn({username, password})

        setTimeout((() => this.props.hideAlert()), 1500)
    }

    changeHandler = e => {
        e.persist();
        this.setState(prev => ({
            ...prev, ...{
                [e.target.name]:  e.target.value
        }}))

    }

    render() {

        if(this.props.isAuth) {
            return (
                <div>
                    <Redirect  to='/Profile'/>
                    <button className="btn btn-dark" onClick={this.exitHandler}>ВЫЙТИ</button>
                </div>
            )
        }

        return (
            <div>
                {this.props.error && <Alert errorText={this.props.error}/>}
                <form onSubmit={this.submitHandler}>
                    <div className="form-group">
                        <label htmlFor="login">Login</label>
                        <input
                            type="text"
                            className="form-control"
                            id="login"
                            name="username"
                            onChange={this.changeHandler}
                        />

                            <small id="emailHelp" className="form-text text-muted">We'll never share your login with
                                anyone else.
                            </small>
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            name="password"
                            onChange={this.changeHandler}
                        />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your password with
                            anyone else.
                        </small>
                    </div>
                    <button type="submit" className="btn btn-primary" disabled={!!this.props.error}>Войти</button>
                </form>
            </div>
        )
    }

}

export default Login