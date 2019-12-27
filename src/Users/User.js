import React, {Component} from 'react';
import '../App.css';

class User extends Component {
    constructor(props) {
        super(props)
        this.M = window.M     
    }

    componentDidMount() {        
        this.M.AutoInit()
    }   

    render() {
        return(
            <li className="collection-item avatar hoverable">
            <img src={this.props.user.imageUrl} alt="" className="circle"/>
            <span className="purple-text title">{this.props.user.jobRole}</span>
        <p className="names">{this.props.user.firstName} {this.props.user.lastName}</p>
            <span className="grey-text">
            <i class="material-icons card-i">email</i>
                {this.props.user.email}
            </span><br/>
            <span className="grey-text">
            <i class="material-icons card-i">location_on</i>
                {this.props.user.address}
            </span>
        </li>            
        )
    }
}

export default User