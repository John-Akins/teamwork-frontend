import React, {Component} from 'react';
import '../App.css';
import FetchedFeeds from './Feeds.js'

class Feeds extends Component {
  constructor(props) {
        super(props)
        this.M = window.M     
  }

  componentDidMount() {      
    this.M.AutoInit()
  }

  render() {
    return (
        <div>
        <h5 className="page">Feed</h5>
      <div className="grid-view">       
        <FetchedFeeds  api={ this.props.api } userSecrets={ this.props.userSecrets }  />
         </div>
      </div>
    )
  }
}

export default Feeds;
