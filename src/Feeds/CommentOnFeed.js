import React, { Component } from 'react';
import '../App.css';
import 'react-dom'

const M = window.M;

class CommentOnFeed extends Component {
    constructor(props) {
        super(props)
        this.saveComment = this.saveComment.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.saveComment = this.saveComment.bind(this)
        this.state = {
            comment: "",
        }
    }

    componentDidMount() {
        M.AutoInit()
    }

    handleChange(e) {
        const value = e.target.value
        this.setState((prevState) => {
            prevState.comment = value
            return { prevState }
        })
    }


    saveComment(e) {
        e.preventDefault()
        const comment = this.state.comment
        if(comment !== "" && comment.length > 0) {
            this.props.saveComment(this.state.comment)
        } else {
            alert("comment must be at least 1 character")
        }
    }

    render() {
        return(
                <li className="collection-item avatar comment-wrapper">
                <i className="material-icons circle">person</i>

                <div><form className="comment-form" onSubmit={this.saveComment}>
                <div>
                <div className="">
                <textarea id="commentonarticle" className="materialize-textarea" style={{"border": "0 !important","boxShadow": "unset"}} placeholder="Type your comment" value={this.state.comment} onChange={this.handleChange}></textarea>
                </div>
                </div>
                </form></div>
                <button className="secondary-content btn-flat"><i className="material-icons">send</i></button>
                </li>
            )
    }
}

export default CommentOnFeed
