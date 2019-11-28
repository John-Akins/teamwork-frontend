import React, {Component} from 'react';
import './App.css';
import Login from "./login/Index"
import Dashboard from './Dashboard/Index'

class App extends Component {
  constructor(props) {
    super(props)
    this.handleLogin = this.handleLogin.bind(this)
    this.state = {
        isLoggedIn: false,
        userSecrets: {},
        api: "https://teamwork-70.herokuapp.com/api/v1/",//"http://127.0.0.1:8080/api/v1/"
    }
    this.logout = this.logout.bind(this)
  }

  logout() {
    this.setState((prevState) => {
      prevState.isLoggedIn = false
      return { prevState }
    })
  }

  handleLogin(userSecrets) {
    if(!!userSecrets.userId) {
      this.setState((prevState) => {
        prevState.isLoggedIn = true
        prevState.userSecrets = userSecrets
        return { prevState }
      })
    } 
    return false
  }

  render() {
    return (
      (!this.state.isLoggedIn) ?
        <Login Login={this.handleLogin} api={this.state.api} />
        :
        <Dashboard  api={this.state.api} isLoggedIn={this.state.isLoggedIn} logout={this.logout} />
    )
  }
}

export default App;
