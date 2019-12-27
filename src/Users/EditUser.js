import React, {Component} from 'react';
import '../App.css';

const RESET_VALUES = { firstName:"", lastName:"", email:"", address:"", gender:"", jobRole:"", department:"", password:"password", isAdmin:"", userId:"", image:"", imageUrl:"" }

class EditUser extends Component {
    constructor(props) {
        super(props)
        this.M = window.M;
        this.state = {
            user: Object.assign({}, RESET_VALUES),
        }
    }

    componentDidMount() {
        this.setState((prevState) => {
            this.M.AutoInit();
            Object.assign(prevState.user, this.props.user)
            prevState.errors = {}
            prevState.isSaving = false
            return { prevState }
        });
    }

    componentDidUpdate(prevProps) {
        // update state when new user is selected  
        if (this.props.user.userId !== prevProps.user.userId) {
            this.setState((prevState) => {
                Object.assign(prevState.user, this.props.user)            
                return { prevState }
            });
        }
    }

    render() {
        return (
            <div id="modal-edit-user" className="modal modal-fixed-footer">
            <div className="teal ligten-2 white-text">
                <div className="row teal">
                    <div className="col s12" style={{"height": "15rem"}}>
                        <span className="" style={{"width": "100%","height": "100%", "display": "block","padding": "1rem"}}>
                        <img src={this.props.user.imageUrl} alt="" className="circle profile-img" />
                        <span className="white-text center h-name" style={{"display": "block"}}> {this.props.user.firstName} {this.props.user.lastName}</span>
                            <h6 className="white-text center h-role" style={{"display": "block"}}> {this.props.user.jobRole} </h6>
                        </span>
                    </div>
                </div>
            </div>
            <div className="modal-content grey lighten-4">
            <ul id="data-card" className="data-card" style={{"overflowY":" auto !important"}}>
                <div className="row" style={{"padding": "1rem"}}>
                    
                </div>
            </ul>
                <div class="modal-action-wrapper row"><button class="modal-close  waves-effect waves-light btn-flat right teal white-text col s12 l1 m2 offset-l11 center offset-m10">close</button>
                </div>
            </div>
          </div>
            )
    }
}

export default EditUser
