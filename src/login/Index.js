import React, {Component} from 'react';
import LoginForm from './Form'
import Welcome from './Welcome'
import '../App.css';

class Login extends Component {
    constructor(props) {
        super(props)
        this.M = window.M     
        this.handleLogin = this.handleLogin.bind(this)
    }
    componentDidMount() {
        this.M.AutoInit()
    }   
    handleLogin(userSecrets) {
        this.props.Login(userSecrets)
    }

    render() {
        return (
            <div className="container">
                <div className="login">
                    <div className="row">
                        <div className="col l7 hide-on-med-and-down">
                            <Welcome M={ this.M } />
                        </div>
                        <div className="col l5 s12 m6  teal lighten-5 p-3">
                            <LoginForm M={ this.M } handleLogin={ this.handleLogin } api={ this.props.api } />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;
