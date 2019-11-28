import React, {Component} from 'react';
import '../App.css';

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
<div className="grid-view">
            <!-- Basic Card -->
            <div className="card blue-grey darken-1">
              <div className="card-content white-text">
                  <h5>                  Ada Lovelace <span className="right grey-text">Nov 24 </span></h5>
<div className="divider"></div>
  <div className="section">
    <h5>Section 1</h5>
    <p>Stuff</p>
  </div>
  <div className="divider"></div>
  <div className="section">
    <h5>Section 2</h5>
    <p>Stuff</p>
  </div>
  <div className="divider"></div>
  <div className="section">
    <h5>Section 3</h5>
    <p>Stuff</p>
  </div>
    </div>
            </div>
          </div>
        )
    }
}

export default Feeds;
