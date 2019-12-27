import React, {Component} from 'react';
import '../App.css';
// import ls from 'local-storage'
import AddUser from './AddUser'
import EditUser from './EditUser'
import User from './User'
import fetch from '../MakeRequest'

const makeRequest = fetch.makeRequest;

class Users extends Component {
    constructor(props) {
        super(props)

        this.M = window.M;
        this.listRef = React.createRef();
        this.updateUsers = this.updateUsers.bind(this)
        this.mapUsers = this.mapUsers.bind(this)
        this.loadUser = this.loadUser.bind(this)
        this.state = {
            loadUser: {
                isLoaded: false,
                user: {}
            },
            Users: {},
        }
    }

    componentDidMount() {
        this.updateUsers()
        this.M.AutoInit()       
    }

    updateUsers(userObj = null) {
        if(userObj !== null) {
            this.setState((prevState) => {
                const newUser = []
                newUser[userObj.userId] = userObj
                Object.assign(prevState.Users, newUser)
                return { prevState }
            })
            return false;
        }
        makeRequest("GET", `${this.props.api}users`,{}, this.props.userSecrets)
        .then((response) => {           
            if(response.status === "success") {
                this.M.toast({html: response.status, classes: 'rounded success'})
                this.setState((prevState) => {
                    prevState.Users = this.mapUsers(response.data)
                    return { prevState }
                })
            } else {
                this.M.toast({html: response.error, classes: 'rounded danger white-text'})                 
            }
        })
        .catch((error) => {
            this.M.toast({html: "request failed, please try again"+error, classes: 'rounded danger'})
        })
        return false;
    }

    

    loadUser(user) {
        this.setState((prevState) => {
            prevState.loadUser.isLoaded = true
            prevState.loadUser.user = user
            return { prevState }
        })
    }

    mapUsers(users) {
        const mappedUsers = []
        users.forEach((user) => {
            mappedUsers[user.userId] = user
        })
        return mappedUsers
    }

    render() {
        const userArr = this.state.Users
        const Users = []
        for (let key in userArr) {
            Users.push(
                <User key={key} user={userArr[key]} loadUser={this.loadUser} ></User>  
            )               
        };

        return (
        <>
            <ul ref={this.listRef} className="list collection col s12">
                { (!!Users.length > 0) ?  Users : 'Loading...' }
            </ul>
            <AddUser  api={ this.props.api } userSecrets={ this.props.userSecrets } updateUsers={this.updateUsers}  />
            <EditUser userIsLoaded={this.state.loadUser.isLoaded} user={this.state.loadUser.user}  api={ this.props.api } userSecrets={ this.props.userSecrets }  />                    
        </>
        )        
    }
}

export default Users
