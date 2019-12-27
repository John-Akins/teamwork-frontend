import React, {Component} from 'react';
import {
    Link
} from "react-router-dom";
import '../App.css';
import Moment from 'react-moment';

class Feed extends Component {
    constructor(props) {
        super(props)
        this.M = window.M     
    }

    componentDidMount() {        
        this.M.AutoInit()
    }   


    render() {
        const dir = `/feed/${this.props.feedType}/${this.props.id}`
        return (
                <ul className="collection feed-wrapper" key={this.props.id} id={this.props.id} data-authorid={this.props.authorId} >

                    <li className="collection-item avatar feed-header"  >
                    <i className="material-icons circle xx-large">person</i>
                            <h4 className="title">
                                {this.props.title}
                            </h4>
                            <br/>
                            <h6 className="created-on">
                            <Moment fromNow>{this.props.date}</Moment>
                                
                            </h6>
                            <a href="#!" className="dropdown-trigger secondary-content" data-target="dropdown1"><i className="material-icons">more_vert</i></a>

                        <ul id="dropdown1" className="dropdown-content">                         
                            <li><a href="#!">flag as inappropriate</a></li>
                            <li><a href="#!">delete</a></li>
                        </ul>       
                    </li>

                <li className="collection-item avatar feed-content">
        { (this.props.feedType === 'article') ? <div className="article">{ this.props.content }</div> :  <img src={this.props.content} alt='content' /> }
                </li>     
                <li className="collection-item avatar feed-action">
                    <div className="row">
                        <div className="col s12 center waves-effect waves-teal">
                        <Link to={dir}  >
                                <span>Load comments</span>    
                        </Link>
                        </div>
                    </div>
                </li>
            </ul>

        )
    }
}

export default Feed;