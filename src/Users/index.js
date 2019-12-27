import React, {Component} from 'react';
import '../App.css';
// import ls from 'local-storage'
import Users from './Users'

class UserWrapper extends Component {
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
                            <label htmlFor="icon_search">Search</label>
                            </div>
                        </div>
                            <Users  api={ this.props.api } userSecrets={ this.props.userSecrets }  />
                        <ul className="pagination"><li className="active"><button className="btn-sm btn-flat page teal white-text" href="#">1</button></li></ul>
                    <div className="fixed-action-btn direction-top">
                    <a className="btn-floating btn-large modal-trigger teal waves-effect waves-light add-user tooltipped" href="#modal-add-user" data-position="top" data-tooltip="Add New Staff">
                        <i className="large material-icons">add</i></a>
                    </div>
                    </div>
                    <div className="page-overlay"></div>
                    </div>
                </div>
        )
    }
}

export default UserWrapper
