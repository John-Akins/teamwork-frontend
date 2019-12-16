import React, {useEffect} from 'react';
import '../App.css';
import 'react-dom'
import {
    useParams
} from "react-router-dom";
import Moment from 'react-moment';

const M = window.M;

export default function Article() {
    const { articleId } = useParams();

    useEffect(() => {        
        M.AutoInit()
            var elems = document.querySelectorAll('.dropdown-trigger');
            M.Dropdown.init(elems, {"alignment": "right","constrain-width":"false"});
    })

    return (
        <div className="row">
        <section className="col l7 m10  s12 offset-m1 offset-l1">
        <ul className="collection feed-wrapper" >

        <li className="collection-item avatar feed-header"  >
        <i className="material-icons circle xx-large">person</i>
                <h3 className="title">
                    Name
                </h3>        
                <small className="created-on">
                <Moment fromNow>1976-04-19 12:59</Moment>
                    
                </small>
                <a href="#!" className="dropdown-trigger secondary-content" data-alignment="right" data-target="dropdown1"><i className="material-icons">more_horiz</i></a>

            <ul id="dropdown1" className="dropdown-content">                         
                <li><a href="#!" className="blue-text">flag as inappropriate</a></li>
                <li><a href="#!" className="red-text">delete</a></li>
            </ul>       
        </li>

        <li className="collection-item avatar feed-content">
<div className="article">
Moment can parse most standard date formats. Use the parse attribute to tell moment how to parse the given date when non-standard. See the Moment docs on parsing for more information.

Moment can parse most standard date formats. Use the parse attribute to tell moment how to parse the given date when non-standard. See the Moment docs on parsing for more information.

Moment can parse most standard date formats. Use the parse attribute to tell moment how to parse the given date when non-standard. See the Moment docs on parsing for more information.

</div>
        </li>     

<ul class="feed-actions">
    <li class="collection-item">
	<a href="#!" class="blue-text">
	<i class="material-icons">thumb_up</i>
	like</a>
   </li>    
    <li class="collection-item">
	<a href="#comment" class="blue-text">
	<i class="material-icons">message</i>
	comment</a>
   </li>
</ul>


<ul class="comments-wrapper">
<li class="collection-item avatar comment"><i class="material-icons circle">person</i><p><span class="username beige-text">User Name</span>  Awesome !</p>
<a href="#!" class="blue-text">like</a>
<a href="#!" class="red-text tabbed">flag</a>
<a href="#!" class="grey-text tabbed">8hrs</a>

<a href="#!" className="dropdown-trigger secondary-content" data-alignment="right" data-target="dropdown2"><i className="material-icons">more_vert</i></a>

<ul id="dropdown2" className="dropdown-content">                         
    <li><a href="#!" className="blue-text">flag as inappropriate</a></li>
    <li><a href="#!" className="red-text">delete</a></li>
</ul>       
</li>

<li class="collection-item avatar comment"><i class="material-icons circle">person</i><p><span class="username beige-text">User Name</span>  Awesome !</p>
<a href="#!" class="blue-text">like</a>
<a href="#!" class="red-text tabbed">flag</a>
<a href="#!" class="grey-text tabbed">8hrs</a>

<a href="#!" className="dropdown-trigger secondary-content" data-alignment="right" data-target="dropdown3"><i className="material-icons">more_vert</i></a>

<ul id="dropdown3" className="dropdown-content">                         
    <li><a href="#!" className="blue-text">flag as inappropriate</a></li>
    <li><a href="#!" className="red-text">delete</a></li>
</ul>       
</li>

<li class="collection-item avatar comment"><i class="material-icons circle">person</i><p><span class="username beige-text">User Name</span>  Awesome !</p>
<a href="#!" class="blue-text">like</a>
<a href="#!" class="red-text tabbed">flag</a>
<a href="#!" class="grey-text tabbed">8hrs</a>

<a href="#!" className="dropdown-trigger secondary-content" data-alignment="right" data-target="dropdown4"><i className="material-icons">more_vert</i></a>

<ul id="dropdown4" className="dropdown-content">                         
    <li><a href="#!" className="blue-text">flag as inappropriate</a></li>
    <li><a href="#!" className="red-text">delete</a></li>
</ul>       
</li>



</ul>


        <li class="collection-item avatar comment-wrapper">
                <i class="material-icons circle">person</i>
                
                <p><form class="comment-form">
            <div>
              <div class="">
                <textarea id="textarea1" class="materialize-textarea" id="comment" style={{"border": "0 !important","box-shadow": "unset"}} placeholder="Type your comment"></textarea>
                
              </div>
            </div>
          </form></p>
                <a href="#!" class="secondary-content"><i class="material-icons">send</i></a>
              </li>

        </ul>
        </section>
    </div>
    )
}