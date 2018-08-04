import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {logout} from "../../actions/authActions";
import {connect} from 'react-redux';

class Logout extends Component {

    componentWillMount() {
        if (this.props.isAuthenticated) {
            console.log("User Logout ", this.props.isAuthenticated);
            localStorage.clear();
            this.props.logout();
        }
    }

    render() {
        return (
            <div>
                <Redirect to={'/'}/>
            </div>
        );
    }

}

function mapStateToProps(state) {
    return {
        isAuthenticated: state.auth.isAuthenticated
    };
}

export default connect(mapStateToProps, {
    logout
})(Logout);
