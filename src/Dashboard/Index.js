import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Feeds from '../feeds/Index'

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      api: this.props.api
    }
    this.logout = this.logout.bind(this)
  }
  
  logout() {
    this.props.logout()
  }

render() {
  return (
    <Router>
      <div>
        <nav className="teal darken-1">
          <div class="nav-wrapper">
          <span data-target="mobile" class="sidenav-trigger hide-on-med-and-up"><i class="material-icons">menu</i></span>
            <span class="brand-logo center">Teamwork</span>
            <ul class="right hide-on-med-and-down">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/articles">Articles</Link>
              </li>
              <li>
                <Link to="/accounts">Accounts</Link>
              </li>
              <li>
                <Link to="/logout" onClick={this.logout}>Logout</Link>
              </li>
            </ul>
          </div>
        </nav>

        <ul class="sidenav" id="mobile">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/articles">Articles</Link>
              </li>
              <li>
                <Link to="/accounts">Accounts</Link>
              </li>
        </ul>


        <section className="container">
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        <Route path="/">
            <Feeds />
          </Route>
          <Route path="/feed">
            <Feeds />
          </Route>
        </Switch>
      </section>
      <footer className="page-footer teal darken-1 center"> © 2019 </footer>
      </div>
    </Router>
  )  
}

}

export default Dashboard
