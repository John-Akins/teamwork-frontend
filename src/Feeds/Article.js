import React, { Component } from 'react';
import '../App.css';
import 'react-dom'
import Moment from 'react-moment';
import fetch from '../MakeRequest'
import Comment from './Comment' 
import CommentOnFeed from './CommentOnFeed'
const makeRequest = fetch.makeRequest;

const M = window.M;

const RESET_DATA = { title: "", id: "", createdOn: "", authorId: "", article: "", comments: [] }

class Article extends Component {
    constructor(props) {
        super(props)
        this.flagComment = this.flagComment.bind(this)
        this.deleteComment = this.deleteComment.bind(this)
        this.state = {
            feed: RESET_DATA
        }
    }

    componentDidMount() {
        M.AutoInit()
        var elems = document.querySelectorAll('.dropdown-trigger');
        M.Dropdown.init(elems, {"alignment": "right","constrain-width":"false"});
        makeRequest("GET", `${this.props.api}articles/${this.props.match.params.articleId}`,{}, this.props.userSecrets)
        .then((response) => {
            if(response.status === "success") {
                M.toast({html: response.status, classes: 'rounded success'})
                this.setState((prevState) => {
                    prevState.feed = response.data
                    return { prevState }
                })
            } else {
                M.toast({html: response.error, classes: 'rounded danger white-text'})     
            }
        })
        .catch((error) => {
            M.toast({html: "request failed, please try again"+error, classes: 'rounded danger'})
        })        
    }

    flagComment(commentId) {
        return false
    }

    deleteComment(commentId) {
        return false
    }

    render() {
        const comments = []
        if(this.state.feed.comments !== undefined && this.state.feed.comments.length > 0) {
            const commentArr = this.state.feed.comments
            commentArr.forEach((comment) => {
                comments.push(
                    <Comment  key={comment.id} comment={comment} flagComment={this.state.flagComment} deleteComment={this.state.deleteComment}></Comment>
                )
            })
        } 
        const today = new Date().getUTCDate();
        return(
            <div className="row">
            <section className="col l7 m10  s12 offset-m1 offset-l1">

            <ul className="collection feed-wrapper" >
            <li className="collection-item avatar feed-header"  >
            <i className="material-icons circle xx-large">person</i>
                <h3 className="title">
                {this.state.feed.title}
                </h3>        
                <small className="created-on">
        <Moment fromNow>{ this.state.feed.createdOn || today }</Moment>
                </small>
                <a href="#!" className="dropdown-trigger secondary-content" data-alignment="right" data-target="dropdown1"><i className="material-icons">more_horiz</i></a>
                <ul id="dropdown1" className="dropdown-content">
                    <li>
                        <a href="#!" className="blue-text">flag as inappropriate</a>
                    </li>
                    <li>
                        <a href="#!" className="red-text">delete</a>
                    </li>
                </ul>
            </li>
            <li className="collection-item avatar feed-content">
                <div className="article">
                    {this.state.feed.article}
                </div>
            </li>
    
    <ul className="feed-actions">
        <li className="collection-item">
        <a href="#!" className="blue-text">
        <i className="material-icons">thumb_up</i>
        like</a>
       </li>    
        <li className="collection-item">
        <a href="#commentonarticle" className="blue-text">
        <i className="material-icons">message</i>
        comment</a>
       </li>
    </ul>
    
    <ul className="comments-wrapper">
        {comments}
    </ul>
    <ul>
    <CommentOnFeed/>
    </ul>
            </ul>
            </section>
        </div>
        )
    }
}

export default Article
