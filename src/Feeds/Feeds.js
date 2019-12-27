import React, {Component} from 'react';
import '../App.css';
import Feed from './Feed';
import fetch from '../MakeRequest'

const makeRequest = fetch.makeRequest;

class FetchedFeeds extends Component {
    constructor(props) {
        super(props)
        this.M = window.M
        this.state = {
            Feeds: {}
        }
    }

    componentDidMount() {        
        this.M.AutoInit()
        makeRequest("GET", `${this.props.api}feed`,{}, this.props.userSecrets)
        .then((response) => {
            if(response.status === "success") {
                this.M.toast({html: response.status, classes: 'rounded success'})
                this.setState((prevState) => {
                    prevState.Feeds = response.data      
                    return { prevState }   
                }) 
            } else {
                this.M.toast({html: response.error, classes: 'rounded danger white-text'})                 
            }
        })
        .catch((error) => {
            this.M.toast({html: "request failed, please try again"+error, classes: 'rounded danger'})
        })      
    }

    componentDidUpdate() {
        this.M.AutoInit()
    }


    render() {
            const feedArr = this.state.Feeds;
            let Feeds = []
            if (!!feedArr && feedArr.length > 0) {
                feedArr.forEach((feed) => {
                    Feeds.push(
                        < Feed key={feed.id} title={feed.title} authorId={feed.authorId} id={feed.id} date={feed.createdOn}  feedType={feed.type} content={feed.content} />
                    ) 
                })
            }

            return (
                <div className="row">
                    <section className="col l7 m10  s12 offset-m1 offset-l1">

                    <ul className="collection feed-wrapper" >
                <li className="collection-item avatar comment-wrapper">
                        <i className="material-icons circle">person</i>                        
                    <div>
                        <a className="modal-trigger" href="#modal1" onClick={() => setTimeout(() => {
                            this.articleTabTrigger.click()
                        }, 500)} >
                            <form className="comment-form">
                    <div>
                    <div className="">
                        <textarea className="materialize-textarea" style={{"border": "0 !important","height": "70px","boxShadow": "unset"}} placeholder="What's on your mind? "></textarea>
                        
                    </div>
                    </div>
                </form>
                    </a>
                    </div>
                    </li>
                </ul>
                    { (!!Feeds.length) ?  Feeds : 'No Feed to display' }
                    </section>


                    <div id="modal1" className="modal feed-post-modal">
                    <div className="modal-header teal white-text ligten-2">
                        <span>Post article or picture</span> <a href="#!"  className="white-text right modal-close waves-effect waves-light btn-flat">X</a>                
                    </div>
                        <div className="modal-content">

                    <ul id="tabs-swipe-demo" className="tabs">
                        <li className="tab col s6"><a href="#post-article"  ref={a => this.articleTabTrigger = a}  >Post an article </a></li>
                        <li className="tab col s6"><a className="" href="#post-gif">Post a picture</a></li>
                    </ul>

                    <div className="row">
                    <div id="post-article">
                        <form className="col s12">
                            <div className="">
                                <div className="input-field col s12">
                                <input id="title" type="text" className="validate"/>
                                <label htmlFor="text">Title</label>
                                </div>
                            </div> 
                            <div className="">
                                <div className="input-field col s12">
                                <textarea id="content" className="materialize-textarea"></textarea>
                                <label htmlFor="textarea1">Content</label>
                                </div>
                            </div>
                            <div className="">
                                <div className="input-field col s12">
                                <button className="waves-effect waves-light btn-small right">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div id="post-gif">
                        <form className="col s12">
                        <div className="">
                                <div className="input-field col s12">
                                <input id="title" type="text" className="validate"/>
                                <label htmlFor="text">Title</label>
                                </div>
                            </div> 
                            <div className="">
                                <div className="file-field input-field col s12">
                                    <div className="btn gray darkgrey-text">
                                        <span>File</span>
                                        <input type="file"/>
                                    </div>
                                    <div className="file-path-wrapper">
                                        <input className="file-path validate" type="text"/>
                                    </div>
                                </div>   
                            </div> 
                            <div className="">
                                <div className="input-field col s12">
                                <button className="waves-effect waves-light btn-small right">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    </div>
                </div>
                </div>
                </div>
            )
    }
}

export default FetchedFeeds;