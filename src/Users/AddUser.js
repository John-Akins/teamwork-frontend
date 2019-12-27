import React, {Component} from 'react';
import '../App.css';
import fetch from '../MakeRequest'
import request from '../Utilities/request'

const objectToFormData = request.objectToFormData
const makeRequest = fetch.makeRequest

const RESET_VALUES = { firstName:"", lastName:"", email:"", address:"", gender:"", jobRole:"", department:"", password:"password", isAdmin:false, userId:null, image:"" }

class AddUser extends Component {
    constructor(props) {
        super(props)
        this.M = window.M;
        this.handleChange = this.handleChange.bind(this)
        this.handleSave = this.handleSave.bind(this)
        this.validateInputs = this.validateInputs.bind(this)
        this.showSavingIndicator = this.showSavingIndicator.bind(this)
        this.state = {
            user: Object.assign({}, RESET_VALUES),
            errors: {},
            isSaving: false
        }
    }

    componentDidMount() {
            this.M.AutoInit();
    }

    componentDidUpdate() {
        this.setState((prevState) => {
            if(prevState.user !== this.state.user) {
                Object.assign(prevState.user, RESET_VALUES)
                prevState.errors = {}
                prevState.isSaving = false
                return { prevState }
            }
        });
    }

    handleChange(e) {
        const value = e.target.type === "checkbox" ? (!!e.target.checked) : e.target.value
        const name = e.target.name

        this.setState((prevState) => {
            if(name === "isAdmin") {
                prevState.user[name] = (value === "true") ? true : false
                return { prevState }
            } 
            if(name === "image") {
                const file =  document.querySelectorAll('#adduser input[type=file]')[0].files[0];
                prevState.user[name] = file;
                return { prevState }
            }
            prevState.user[name] = value 
            return { prevState }
        })
    }

    validateInputs() {
        const fields = this.state.user
        for (const key in fields) {
            if (fields.hasOwnProperty(key)) {
                if(fields[key] === "") {
                    return false
                }                
            }
        }
        return true
    }

    showSavingIndicator(show = true) {
        this.setState((prevState) => {
            prevState.isSaving = show
            return { prevState }
        })
    }

    handleSave(e) {
        e.preventDefault()
        const isFormFullyFilled = this.validateInputs()
        if(isFormFullyFilled === true ) {            
            this.showSavingIndicator()
            const data = objectToFormData(this.state.user)
            makeRequest("POST", `${this.props.api}auth/create-user`, data, this.props.userSecrets)
            .then((response) => {
                if(response.status === "success") {
                    this.M.toast({html: response.data.message, classes: 'rounded center'})
                    this.props.updateUsers()
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

    render() {
        return (
            <div id="modal-add-user" className="modal modal-fixed-footer">
            <div className="modal-header teal ligten-2 white-text">
                <span>New User</span> <a href="#!"  className="white-text right modal-close waves-effect waves-light btn-flat">X</a>                
            </div>
            <div className="modal-content grey lighten-4">
                <ul id="data-card" className="data-card" style={{"overflowY":" auto !important"}}>
                <div className="row" style={{"padding": "1rem"}}>
                <form id="adduser" onSubmit={this.handleSave}>
                <div className="row">
                    <div className="col s12 white l6">    
                        <h6>Bio:</h6>
                    <div className="section" >
                        <div className="input-field col s12 noselect">
                    <input name="firstName" type="text" className="validate valid focused" onChange={this.handleChange} value={this.state.user.firstName} />
                    <label className="">First Name</label>
                    </div>
                <div className="divider"></div>

                <div className="input-field col s12 noselect">
                    <input name="lastName" type="text" className="validate valid focused" onChange={this.handleChange} value={this.state.user.lastName} />
                    <label className="">Last Name</label>
                    </div>
                <div className="divider"></div>
                </div>
                <small className="label">Gender:</small>
                <div className="input-field col s12">
                <p>
                <label>
                    <input name="gender" value="male" type="radio" checked={(this.state.user.gender === "male") ? true:false} onChange={this.handleChange}/>
                    <span>Male</span>
                </label>

                <label>
                    <input name="gender" value="female" type="radio" checked={(this.state.user.gender === "female") ? true:false} onChange={this.handleChange}/>
                    <span>Female</span>
                </label>
                </p>
                </div>
                <div className="divider"></div>
                </div>
                    <div className="col s12 l5 white offset-l1">    
                    <h6>Contact:</h6>
                <div className="section" >
                        <div className="col s12 noselect">
                        <label className="">Address</label>
                        <textarea name="address" className="materialize-textarea active" placeholder="E.g 4 Maddison street, LA" style={{"boxShadow": "unset"}} onChange={this.handleChange} value={this.state.user.address} ></textarea>
                        </div>
                <div className="divider"></div>

                <div className="input-field col s12 noselect">
                    <input name="email" type="text" className="validate valid focused" onChange={this.handleChange} value={this.state.user.email}
                    />
                    <label className="">Email</label>
                    </div>
                <div className="divider"></div>
                </div>
                </div>
                </div>
                <div className="row">
                <div className="col s12  l6 white">
                    <h6>Role:</h6>
                    <div className="section" >
                        <small className="label">Department:</small>
                        <div className="input-field col s12">
                            <p>
                            <label>
                                <input name="department" value="IT" type="radio" checked={(this.state.user.department === "IT") ? true:false} onChange={this.handleChange}/>
        <span>IT Department {this.state.user.department}</span>
                            </label>

                            <label>
                                <input name="department" value="HR" type="radio" checked={(this.state.user.department === "HR") ? true:false} onChange={this.handleChange}/>
                                <span>Human Resources</span>
                            </label>

                            <label>
                                <input name="department" value="Marketing" type="radio" checked={(this.state.user.department === "Marketing") ? true:false} onChange={this.handleChange}/>
                                <span>Marketing</span>
                            </label>

                            <label>
                                <input name="department" value="Logistics" type="radio" checked={(this.state.user.department === "Logistics") ? true:false} onChange={this.handleChange}/>
                                <span>Logistics</span>
                            </label>
                            </p>
                        </div>
                        <div className="divider"></div>
                    </div>

                        <small className="label">Job Role:</small>
                        <div className="input-field col s12">
                            <p>
                            <label>
                                <input name="jobRole" value="Software Engineer" type="radio" checked={(this.state.user.jobRole === "Software Engineer") ? true:false} onChange={this.handleChange}/>
                                <span>Software Engineer</span>
                            </label>

                            <label>
                                <input name="jobRole" value="Manager" type="radio" checked={(this.state.user.jobRole === "Manager") ? true:false} onChange={this.handleChange}/>
                                <span>Manager</span>
                            </label>

                            <label>
                                <input name="jobRole" value="IT Manager" type="radio" checked={(this.state.user.jobRole === "IT Manager") ? true:false} onChange={this.handleChange}/>
                                <span>IT Manager</span>
                            </label>

                            <label>
                                <input name="jobRole" value="CTO" type="radio" checked={(this.state.user.jobRole === "CTO") ? true:false} onChange={this.handleChange}/>
                                <span>Chief Technology Officer</span>
                            </label>

                            <label>
                                <input name="jobRole" value="Engineer" type="radio" checked={(this.state.user.jobRole === "Engineer") ? true:false} onChange={this.handleChange}/>
                                <span>Mechanical Engineer</span>
                            </label>
                            </p>
                        </div>
                        <div className="divider"></div>
 
                        <small className="label">Priviledge:</small>
                        <div className="input-field col s12">
                            <p>
                            <label>
                                <input name="isAdmin" value="true" type="radio" checked={this.state.user.isAdmin == true ? true:false} onChange={this.handleChange}/>
                                <span>System Admin</span>
                            </label>

                            <label>
                                <input name="isAdmin" value="false" type="radio" checked={this.state.user.isAdmin == false ? true:false} onChange={this.handleChange}/>
                                <span>Employee</span>
                            </label>
                            </p>                        
                        </div>

                    </div>

                <div className="col s12  l5 white offset-l1">
                <h6>Profile Picture:</h6>
                <div className="section" >
                <div className="">
                    <div className="file-field input-field col s12">
                        <div className="btn gray darkgrey-text">
                            <span>File</span>
                            <input type="file" name="image" onChange={this.handleChange}/>
                        </div>
                        <div className="file-path-wrapper">
                            <input className="file-path validate" type="text"/>
                        </div>
                    </div>   
                </div> 
                <div className="divider"></div>
                </div>
            </div>

                </div>
                <div className="modal-action-wrapper row">
                {
                (this.state.isSaving) === false ? <button  className="waves-effect waves-light btn-flat right teal white-text col s12 l1 m2 offset-l11 center offset-m10" onClick={this.handleSave}>Save</button>:<button className="waves-effect waves-light btn-flat right teal white-text col s12 l2 m2 offset-l10 center offset-m10">Saving<i className="fa fa-spinner fa-spin" data-visibility="show"></i></button>
                }
                </div>
                </form>
                </div>
                </ul>
            </div>

          </div>
            )
    }
}

export default AddUser
