import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Feeds from '../Feeds'
import Article from '../Articles'
import Profile from '../Profile'
import UserWrapper from '../Users'

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.logout = this.logout.bind(this)
    this.state = {
      activeFeedId : null
    }
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
            <Profile api={ this.props.api } userSecrets={ this.props.userSecrets } />
          </Route>
          <Route exact path="/users">
            <UserWrapper api={ this.props.api } userSecrets={ this.props.userSecrets } />
          </Route>
          <Route path="/feed/gif/:gifId">
            <div> GIFSS </div>
          </Route>
          <Route path='/feed/article/:articleId' Component={Article}>
            <Article api={ this.props.api } userSecrets={ this.props.userSecrets } />
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
