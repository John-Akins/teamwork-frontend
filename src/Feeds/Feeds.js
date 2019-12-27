import React, {Component} from 'react';
import '../App.css';
import Feed from './Feed';
import fetch from '../MakeRequest'
import request from '../Utilities/request'

const objectToFormData = request.objectToFormData
const makeRequest = fetch.makeRequest
const makeRequestNoFile = fetch.makeRequestNoFile

class FetchedFeeds extends Component {
    constructor(props) {
        super(props)
        this.M = window.M
        this.postGif = this.postGif.bind(this)
        this.postArticle = this.postArticle.bind(this)
        this.handleChangeArticle = this.handleChangeArticle.bind(this)
        this.handleChangeGif = this.handleChangeGif.bind(this)        
        this.validateInputs = this.validateInputs.bind(this)
        this.state = {
            Feeds: {},
            article: { title: "", article: "" },
            gif: { title: "", image: "" }
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

    validateInputs() {
        const article = this.state.article
        const gif = this.state.gif
        let isGifFormFullyFilled = false
        let isArticleFormFullyFilled = false
        for (const key in gif) {
            if (gif.hasOwnProperty(key)) {
                isGifFormFullyFilled = (gif[key] === "") ? false : true                 
            }
        }
        for (const key in article) {
            if (article.hasOwnProperty(key)) {
                isArticleFormFullyFilled = (article[key] === "") ? false : true                 
            }
        }
        return (isArticleFormFullyFilled === false && isGifFormFullyFilled === false) ? false : true
    }

    postGif(e) {
        e.preventDefault()
        const isFormFullyFilled = this.validateInputs()
        if(isFormFullyFilled === true ) {            
            const data = objectToFormData(this.state.gif)
            makeRequest("POST", `${this.props.api}gifs`, data, this.props.userSecrets)
            .then((response) => {
                if(response.status === "success") {
                    this.M.toast({html: response.data.message, classes: 'rounded center'})
                    window.location.reload()                    
                }
                if(response.status === "error") {
                    console.log(response.error)                    
                }
            })
            .catch((error) => {
                alert("request failed, please try again", error)
            })
        } else {
            alert("Please fill all inputs")
        }
    }

    postArticle(e) {
        e.preventDefault()
        const isFormFullyFilled = this.validateInputs()
        if(isFormFullyFilled === true ) {            
            const data = this.state.article
            makeRequestNoFile("POST", `${this.props.api}articles`, data, this.props.userSecrets)
            .then((response) => {
                if(response.status === "success") {
                    this.M.toast({html: response.data.message, classes: 'rounded center'})
                    window.location.reload()                    
                }
                if(response.status === "error") {
                    console.log(response.error)
                }
            })
            .catch((error) => {
                alert("request failed, please try again", error)
            })
        } else {
            alert("Please fill all inputs")
        }
    }

    handleChangeArticle(e) {
        const value = e.target.type === "checkbox" ? (!!e.target.checked) : e.target.value
        const name = e.target.name

        this.setState((prevState) => {
            prevState.article[name] = value 
            return { prevState }
        })
    }    

    handleChangeGif(e) {
        const value = e.target.type === "checkbox" ? (!!e.target.checked) : e.target.value
        const name = e.target.name

        this.setState((prevState) => {
            if(name === "image") {
                const file =  document.querySelectorAll('input[type=file]')[0].files[0];
                prevState.gif[name] = file;
                return { prevState }
            }
            prevState.gif[name] = value 
            return { prevState }
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
                        <form className="col s12" onSubmit={this.postArticle}>
                            <div className="">
                                <div className="input-field col s12">
                                <input name="title" type="text" className="validate" onChange={this.handleChangeArticle}/>
                                <label htmlFor="text">Title</label>
                                </div>
                            </div> 
                            <div className="">
                                <div className="input-field col s12">
                                <textarea name="article" className="materialize-textarea"  onChange={this.handleChangeArticle}></textarea>
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
                        <form className="col s12" id="postgif" onSubmit={this.postGif}>
                        <div className="">
                                <div className="input-field col s12">
                                <input name="title" type="text" className="validate"  onChange={this.handleChangeGif}/>
                                <label htmlFor="text">Title</label>
                                </div>
                            </div> 
                            <div className="">
                                <div className="file-field input-field col s12">
                                    <div className="btn gray darkgrey-text">
                                        <span>File</span>
                                        <input name="image" type="file"  onChange={this.handleChangeGif} />
                                    </div>
                                    <div className="file-path-wrapper">
                                        <input className="file-path validate" type="text"  /> 
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