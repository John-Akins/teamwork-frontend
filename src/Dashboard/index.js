import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Feeds from '../Feeds'
import Article from '../Feeds/Article'
import Gif from '../Feeds/Gif'
import Profile from '../Profile'
import UserWrapper from '../Users'
import fetch from '../MakeRequest'

const makeRequest = fetch.makeRequest;

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.M = window.M
    this.logout = this.logout.bind(this)
    this.makeRequest = makeRequest
    this.state = {
      activeFeedId : null,
      user : null
    }
  }
  

  componentDidMount() {
    makeRequest("GET", `${this.props.api}users`,{}, this.props.userSecrets)
    .then((response) => {
        if(response.status === "success") {
          this.setUserData(response.data, this.props.userSecrets.userId)
        } else {
          this.M.toast({html: response.error, classes: 'rounded danger white-text'})                 
        }
    })
    .catch((error) => {
      this.M.toast({html: "request failed, please try again"+error, classes: 'rounded danger'})
    })
    return false;    
  }

  setUserData(users, userId) {
    users.forEach((user) => {
      if(user.userId === userId) {
        return this.setState({ user })
      }
    })
  }

  logout() {
    this.props.logout()
  }

  render() {
  return (
    <Router>
      <div className="">
        <div className="navbar">
        <nav className="teal darken-1">
          <div className="nav-wrapper">
          <span data-target="mobile" className="sidenav-trigger hide-on-large-only"><i className="material-icons">menu</i></span>
            <span className="brand-logo">Teamwork</span>
            <ul className="right hide-on-med-and-down">
            <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
              <li>
                <Link to="/" onClick={this.logout}>Logout</Link>
              </li>
            </ul>
          </div>
        </nav>
        </div>


        <ul className="sidenav" id="mobile">
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
              <li>
                <Link to="/" onClick={this.logout}>Logout</Link>
              </li>
        </ul>

        <div className="row">
        <section className="col l10 m10 s12 offset-m1 offset-l1 grey lighten-4" style={{height: "calc(100vh - 60px)", overflowY: "scroll" }}>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        <Route exact path="/">
            <Feeds api={ this.props.api } userSecrets={ this.props.userSecrets } />
          </Route>
          <Route exact path="/home">
            <Feeds api={ this.props.api } userSecrets={ this.props.userSecrets } />
          </Route>
          <Route exact path="/profile">
            <Profile user = {this.state.user} />
          </Route>
          <Route exact path="/users">
            <UserWrapper api={ this.props.api } userSecrets={ this.props.userSecrets } />
          </Route>
          <Route path="/feed/gif/:gifId" render={(props) =>
             <Gif api={ this.props.api } userSecrets={ this.props.userSecrets } {...props} />
          }>
          </Route>
          <Route path='/feed/article/:articleId' render={(props) =>
             <Article api={ this.props.api } userSecrets={ this.props.userSecrets } {...props}></Article>
          }>
          </Route>
        </Switch>
      </section>          
        </div>

      </div>
    </Router>
  )  
}

}

export default Dashboard
