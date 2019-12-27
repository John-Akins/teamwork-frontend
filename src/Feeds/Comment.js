import React, { Component } from 'react';
import '../App.css';
import 'react-dom'
import Moment from 'react-moment';

const M = window.M;

class Comment extends Component {
    componentDidMount() {
        M.AutoInit()
        this.flagComment = this.flagComment.bind(this)
        this.deleteComment = this.deleteComment.bind(this)
    }

    flagComment() {
        return this.props.flagComment(this.props.comment.id)
    }

    deleteComment() {
        return this.props.deleteComment(this.props.comment.id)
    }

    render() {
        return(
            <li className={this.props.comment.isFlagged === false ? "collection-item avatar comment" : "collection-item avatar comment red lighten-4" }>
            <i className="material-icons circle">person</i><p><span className="username beige-text">{this.props.comment.commentBy}</span> {this.props.comment.comment} </p>
            <a href="#!" className="blue-text">like</a>
            <a href="#!" className="red-text tabbed">flag</a>
            <a href="#!" className="grey-text tabbed">
                <Moment fromNow={this.props.comment.commentOn}></Moment>
            </a>
        
            <a href="#!" className="dropdown-trigger secondary-content" data-alignment="right" data-target="dropdown2"><i className="material-icons">more_vert</i></a>
        
            <ul id="dropdown2" className="dropdown-content">
                <li className="yellow-text" onClick={this.flagComment}>flag as inappropriate</li>
                <li className="red-text" onClick={this.deleteComment}>delete</li>
            </ul>
            </li>    
            )
    }
}

export default Comment
