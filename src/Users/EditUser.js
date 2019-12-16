import React, {Component} from 'react';
import '../App.css';

class EditUser extends Component {
    constructor(props) {
        super(props)
        this.M = window.M;
    }

    componentDidMount() {
        this.M.AutoInit()       
    }

    render() {
        return (
            <div id="modal-edit-user" class="modal modal-fixed-footer">
            <div className="modal-header teal ligten-2 white-text">
                <span>Add New User</span> <a href="#!"  className="white-text right modal-close waves-effect waves-light btn-flat">X</a>                
            </div>

            <div class="modal-content grey lighten-4">
                <ul id="data-card" class="data-card" style={{"overflow-y":" auto !important"}}>
                <div class="row" style={{"padding": "1rem"}}>
                <form id="edituser">
                <div class="row">
                    <div class="col s12 white l6">    
                        <h6>Bio:</h6>
                    <div class="section" >
                        <div class="input-field col s12 noselect">
                    <input id="sname" type="text" class="validate valid"/>
                    <label class="">First Name</label>
                    </div>
                <div class="divider"></div>

                <div class="input-field col s12 noselect">
                    <input id="oname" type="text" class="validate valid"/>
                    <label class="">Last Name</label>
                    </div>
                <div class="divider"></div>
                </div>
                <div class="input-field col s12  selectable">
                    <select name="gender" id="gender" >
                        <option value = "1">Male</option>
                        <option value = "0">Female</option>
                    </select>
                    <label>Gender</label>
                </div>
                <div class="divider"></div>
                </div>
                    <div class="col s12 l5 white offset-l1">    
                    <h6>Contact:</h6>
                <div class="section" >
                        <div class="col s12 noselect">
                        <label class="">Address</label>
                        <textarea id="address" class="materialize-textarea active" placeholder="E.g 4 Maddison street, LA" style={{"boxShadow": "unset"}}></textarea>
                        </div>
                <div class="divider"></div>

                <div class="input-field col s12 noselect">
                    <input id="email" type="text" class="validate valid"/>
                    <label class="">Email</label>
                    </div>
                <div class="divider"></div>
                </div>
                </div>
                </div>
                <div class="row">
                <div class="col s12  l6 white">    
                    <h6>Role:</h6>
                    <div class="section" >
                        <div class="input-field col s12  selectable">
                        <select name="Departments" id="roles" >
                            <option value="">Select a department</option>
                            <option value="1">IT Department</option>
                            <option value="2">Human Resources</option>
                            <option value="3">Marketing</option>
                            <option value="4">Logistics</option>
                        </select>
                        <label>Department</label>
                        </div>

                        <div class="input-field col s12  selectable">
                        <select name="roles" id="roles" >
                            <option value="">Select a designation</option>
                            <option value="1">Software Engineer</option>
                            <option value="2">Manager</option>
                            <option value="3">IT Manager</option>
                            <option value="4">CTO</option>
                        </select>
                        <label>Job Role</label>
                        </div>

                        <div class="input-field col s12  selectable">
                        <select name="priviledge" id="priviledge">
                            <option value="">Select user priviledge</option>
                            <option value="1">Admin</option>
                            <option value="2">Employee</option>
                        </select>
                        <label>Priviledge</label>
                        </div>
                    </div> 
                </div>


                <div class="col s12  l5 white offset-l1">    
                <h6>Profile Picture:</h6>
                <div class="section" >
                <div className="">
                    <div class="file-field input-field col s12">
                        <div class="btn gray darkgrey-text">
                            <span>File</span>
                            <input type="file"/>
                        </div>
                        <div class="file-path-wrapper">
                            <input class="file-path validate" type="text"/>
                        </div>
                    </div>   
                </div> 
                <div class="divider"></div>
                </div> 
            </div>

                </div>     
                </form>
                </div>
                </ul>
            </div>

            <div class="modal-footer lighten-2">
            <a href="#!" class="modal-close waves-effect waves-green btn-flat teal white-text">Save</a>
            </div>

          </div>
        )        
    }

}

export default EditUser

