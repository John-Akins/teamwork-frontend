import React, {Component} from 'react';
import './App.css'
import Login from "./Login"
import ls from 'local-storage'
import Dashboard from './Dashboard/index'

// const localApi = "http://localhost:8080/api/v1/";
const remoteApi = "https://teamwork-70.herokuapp.com/api/v1/";

class App extends Component {
  constructor(props) {
    super(props)
    this.handleLogin = this.handleLogin.bind(this)
    this.state = {
        isLoggedIn:  false,      
        userSecrets: {
          userId: "",
          token: "",          
        }, 
        api: remoteApi,
    }
    this.logout = this.logout.bind(this)
  }

  componentDidMount() {
    this.setState((prevState) => {
      prevState.isLoggedIn = (ls.get("isLoggedIn") === true) ? true : false
      prevState.userSecrets.userId = (!!prevState.isLoggedIn) ? ls.get("userId") : ""
      prevState.userSecrets.token = (!!prevState.userSecrets.userId) ? ls.get("token") : ""
      return { prevState }
    })
  }

  logout() {
    this.setState((prevState) => {
      prevState.isLoggedIn = false
      ls.clear()
      return { prevState }
    })
  }

  handleLogin(userSecrets) {
    if(!!userSecrets.userId) {
      this.setState((prevState) => {
        ls.set('isLoggedIn', true)
        ls.set('token', userSecrets.token)
        ls.set('userId', userSecrets.userId)

        prevState.isLoggedIn = true
        prevState.userSecrets.userId = userSecrets.userId
        prevState.userSecrets.token = userSecrets.token
        console.log(prevState)
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
       <Dashboard api={this.state.api} userSecrets={this.state.userSecrets} logout={this.logout}/>
    )
  }
}

export default App;
