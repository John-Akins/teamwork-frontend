import React, {Component} from 'react';
import '../App.css';
import AddUser from './AddUser'
import EditUser from './EditUser'

class Users extends Component {
    constructor(props) {
        super(props)
        this.M = window.M;
    }

    componentDidMount() {
        this.M.AutoInit()       
    }

    render() {
        return (
                <div className="row">
                    <div className="col s12">
                    <div id="user-list">
                        <div className="row">
                            <div className="col l9 m9 s12">
                            <h5 className="text-grey darken-4 curr-page">Employees</h5>
                            </div>
                            <div className="input-field col l3 m3 s12 right">
                            <input id="icon_search" type="tel" className="validate search"/>
                            <label for="icon_search">Search</label>
                            </div>
                        </div>
                        <ul className="list collection col s12">
                            <li className="collection-item avatar hoverable">   
                                <img src="http://res.cloudinary.com/dydyvjqpb/image/upload/v1575034884/trs8vlmlrdxgtbxhgt9v.gif" alt="" className="circle" />
                                <span className="purple-text title">Sales Staff</span>
                                <p className="names">Jane Doe</p>
                                <small className="green-text">Phone: 080123456781</small>
                                <a className="waves-effect waves-dark white tooltipped modal-trigger" data-position="top" data-tooltip="Load details" data-userid="1234567891" href="#modal-edit-user">
                                <i className="material-icons grey-text">more_vert</i>
                                </a>
                            </li>
                            <li className="collection-item avatar hoverable">
                                <img src="http://res.cloudinary.com/dydyvjqpb/image/upload/v1575034884/trs8vlmlrdxgtbxhgt9v.gif" alt="" className="circle"/>
                                <span className="purple-text title">Store Keeper</span>
                                <p className="names">Mark  Doe</p>
                                <small className="green-text">Phone: 080123456782</small>
                                <a className="waves-effect waves-dark white tooltipped modal-trigger" data-position="top" data-tooltip="Load details" data-userid="1234567892" href="#modal-edit-user">
                                <i className="material-icons grey-text">more_vert</i>
                                </a>
                            </li>
                            </ul>

                        <ul className="pagination"><li className="active"><a className="page" href="#">1</a></li></ul>
                    <div className="fixed-action-btn direction-top">
                    <a className="btn-floating btn-large modal-trigger teal waves-effect waves-light add-user tooltipped" href="#modal-add-user" data-position="top" data-tooltip="Add New Staff">
                        <i className="large material-icons">add</i></a>
                    </div>
                    </div>
                    <div class="page-overlay"></div>
                    <AddUser/>
                    <EditUser/>                    
                    </div>
                </div>
        )        
    }

}

export default Users

