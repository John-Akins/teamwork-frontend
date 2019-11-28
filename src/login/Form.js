import React, {Component} from 'react';

class LoginForm extends Component {
    constructor(props){
        super(props);
        this.M = window.M;     //Materialize instance  
        this.userSignin = this.userSignin.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.state = {
            login: {
                email: "",
                password: ""
            }
        }
    }

    userSignin(e) {
        e.preventDefault()
        if(this.state.email !== "" && this.state.password !== "") {
            fetch(this.props.api+'auth/signin', {
                method: 'post',
                headers: { "Content-Type":"application/json" },
                body: JSON.stringify(this.state.login),
            })
            .then(res => res.json())
            .then(res => {
                console.log(res.data)
                this.props.handleLogin(res.data)
            })
            .catch(err => console.log(err))
        }        
    }
    
    handleChange(e) {
        const value = e.target.value
        const name = e.target.id
        this.setState((prevState) => {   
            prevState.login[name] = value
            return { prevState }
        })
    }

    render() {
        return (
            <div className="LoginForm row">
                <form className="col s12">
                    <h5 className="teal-text center">Please signin</h5>
                    <div className="row">
                        <div className="input-field  col s12">
                            <input id="email" type="email" className="validate" onChange={this.handleChange} value={this.state.email} />
                            <label htmlFor="email">Email</label>
                        </div>
                    </div>                        
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="password" type="password" className="validate"  onChange={this.handleChange} value={this.state.password} />
                            <label htmlFor="password">Password</label>
                        </div>
                    </div>
                    <button className="waves-effect waves-light btn-large col s12" onClick={this.userSignin}>Sign in</button>
                </form>
            </div>
        )
    }
}

export default LoginForm;
