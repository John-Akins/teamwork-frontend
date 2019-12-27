import React, {Component} from 'react';
import '../App.css';

const RESET_VALUES = { firstName: "",lastName: "",email: "",address: "",gender: "",jobRole: "",department: "",isAdmin: true,userId: "",imageUrl: null }

class Profile extends Component {
    constructor(props) {
        super(props)
        this.M = window.M;
        this.state = {
            user: RESET_VALUES
        }
    }

    componentDidMount() {
        this.M.AutoInit()
        if(this.props.user !== null) {
            this.setState((prevState) => {
                prevState.user = this.props.user
                return { prevState }
            })
        }
    }

    componentDidUpdate(prevProps) {
        if(prevProps.user !== this.props.user) {
            this.setState((prevState) => {
                prevState.user = this.props.user
                return { prevState }
            })      

            const inputs = document.querySelectorAll('.profile-data-card input[type=text].validate')
            setTimeout(()=>{
                inputs.forEach((input) => {
                    input.nextSibling.classList.add('active')
                })
                var elems = document.querySelectorAll('.profile-data-card select');
                this.M.FormSelect.init(elems);              
            },500)            
        }
    }


    render() {
        return (
                <div className="row">
                    <div className="col col l7 m10  s12 offset-m1 offset-l1">
                    <ul id="profile-data-card" className="profile-data-card grey lighten-4" style={{"overflowY":" auto !important"}}>
                        <div className="row teal">
                            <div className="col s12" style={{"height": "15rem"}}>
                                <span className="" style={{"width": "100%","height": "100%", "display": "block","padding": "1rem"}}>
                                <img src={this.state.user.imageUrl} alt="" className="circle profile-img" />
                                <span className="white-text center h-name" style={{"display": "block"}}> {this.state.user.firstName} {this.state.user.lastName}</span>
                                <h6 className="white-text center h-role" style={{"display": "block"}}> {this.state.user.jobRole} </h6>
                                </span>
                            </div>
                        </div>    

                        <div className="row" style={{"padding": "1rem"}}>
                        <form id="edituser">
                        <div className="row">
                            <div className="col s12 card l6">    
                                <h6>Bio:</h6>
                            <div className="section" >
                                <div className="input-field col s12 noselect">
                            <input disabled defaultValue={this.state.user.firstName} id="sname" type="text" className="validate valid"/>
        <label className="">First Name</label>
                            </div>
                        <div className="divider"></div>

                        <div className="input-field col s12 noselect">
                            <input disabled defaultValue={this.state.user.lastName} id="oname" type="text" className="validate valid"/>
                            <label className="">Last Name</label>
                            </div>
                        <div className="divider"></div>
                        </div>
                        <div className="input-field col s12  selectable">
                            <select name="gender" id="gender" disabled >
                                <option value=""> Gender </option>
                                <option value = "male" selected={this.state.user.gender === "male" ? true:false} >Male </option>
                                <option value = "female" selected={this.state.user.gender === "female" ? true:false} >Female
                                </option>
                            </select>
                            <label>Gender</label>
                        </div>
                        <div className="divider"></div>
                        </div>
                            <div className="col s12 l5 card offset-l1">    
                            <h6>Contact:</h6>
                        <div className="section" >
                                <div className="col s12 noselect">
                                <label className="">Address</label>
                                <textarea id="address" className="materialize-textarea active" placeholder="E.g 4 Maddison street, LA" style={{"boxShadow": "unset"}} disabled defaultValue={this.state.user.address} ></textarea>
                                </div>
                        <div className="divider"></div>

                        <div className="input-field col s12 noselect">
                            <input disabled id="email" type="text" className="validate valid" defaultValue={this.state.user.email} />
                            <label className="">Email</label>
                            </div>
                        <div className="divider"></div>
                        </div>
                        </div>
                        </div>
                        <div className="row">
                        <div className="col s12  l6 card">    
                            <h6>Role:</h6>
                            <div className="section" >
                                <div className="input-field col s12  selectable">
                                <select name="Departments" id="roles" disabled>
                                    <option value="">Select a department</option>
                                    <option value="IT" selected={this.state.user.department === "IT" ? true:false} >IT Department</option>
                                    <option value="Human Resources" selected={this.state.user.department === "Human Resources" ? true:false} >Human Resources</option>
                                    <option value="Marketing" selected={this.state.user.department === "Marketing" ? true:false}>Marketing</option>
                                    <option value="Logistics" selected={this.state.user.department === "Logistics" ? true:false}>Logistics</option>
                                </select>
                                <label>Department</label>
                                </div>

                                <div className="input-field col s12  selectable">
                                <select name="roles" id="roles" disabled>
                                    <option value="">Select a designation</option>
                                    <option value="Software Engineer" selected={this.state.user.jobRole === "Software Engineer" ? true:false}>Software Engineer</option>
                                    <option value="Manager" selected={this.state.user.jobRole === "Manager" ? true:false}>Manager</option>
                                    <option value="IT Manager" selected={this.state.user.jobRole === "IT Manager" ? true:false}>IT Manager</option>
                                    <option value="CTO" selected={this.state.user.jobRole === "CTO" ? true:false}>CTO</option>
                                </select>
                                <label>Job Role</label>
                                </div>

                                <div className="input-field col s12  selectable">
                                <select name="priviledge" id="priviledge" disabled>
                                    <option value="">Select user priviledge</option>
                                    <option value={true} selected={this.state.user.isAdmin === true ? true:false}>Admin</option>
                                    <option value={false} selected={this.state.user.isAdmin === false ? true:false}>Employee</option>
                                </select>
                                <label>Priviledge</label>
                                </div>
                            </div> 
                        </div>
                        </div>     
                        </form>
                        </div>
                        </ul>
                    </div>
                </div>
        )        
    }

}

export default Profile