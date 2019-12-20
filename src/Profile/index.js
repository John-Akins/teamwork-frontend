import React, {Component} from 'react';
import '../App.css';



class Profile extends Component {
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
                    <div className="col col l7 m10  s12 offset-m1 offset-l1">
                    <ul id="profile-data-card" className="profile-data-card grey lighten-4" style={{"overflowY":" auto !important"}}>
                        <div className="row teal">
                            <div className="col s12" style={{"height": "15rem"}}>
                                <span className="" style={{"width": "100%","height": "100%", "display": "block","padding": "1rem"}}>
                                <img src="http://res.cloudinary.com/dydyvjqpb/image/upload/v1575034884/trs8vlmlrdxgtbxhgt9v.gif" alt="" className="circle profile-img" />
                                <span className="white-text center h-name" style={{"display": "block"}}> Akinsola Akolawole</span>
                                <h6 className="white-text center h-role" style={{"display": "block"}}> Sales Staff </h6>
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
                            <input id="sname" type="text" className="validate valid"/>
                            <label className="">First Name</label>
                            </div>
                        <div className="divider"></div>

                        <div className="input-field col s12 noselect">
                            <input id="oname" type="text" className="validate valid"/>
                            <label className="">Last Name</label>
                            </div>
                        <div className="divider"></div>
                        </div>
                        <div className="input-field col s12  selectable">
                            <select name="gender" id="gender" >
                                <option value = "1">Male</option>
                                <option value = "0">Female</option>
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
                                <textarea id="address" className="materialize-textarea active" placeholder="E.g 4 Maddison street, LA" style={{"boxShadow": "unset"}}></textarea>
                                </div>
                        <div className="divider"></div>

                        <div className="input-field col s12 noselect">
                            <input id="email" type="text" className="validate valid"/>
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
                                <select name="Departments" id="roles" >
                                    <option value="">Select a department</option>
                                    <option value="1">IT Department</option>
                                    <option value="2">Human Resources</option>
                                    <option value="3">Marketing</option>
                                    <option value="4">Logistics</option>
                                </select>
                                <label>Department</label>
                                </div>

                                <div className="input-field col s12  selectable">
                                <select name="roles" id="roles" >
                                    <option value="">Select a designation</option>
                                    <option value="1">Software Engineer</option>
                                    <option value="2">Manager</option>
                                    <option value="3">IT Manager</option>
                                    <option value="4">CTO</option>
                                </select>
                                <label>Job Role</label>
                                </div>

                                <div className="input-field col s12  selectable">
                                <select name="priviledge" id="priviledge">
                                    <option value="">Select user priviledge</option>
                                    <option value="1">Admin</option>
                                    <option value="2">Employee</option>
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