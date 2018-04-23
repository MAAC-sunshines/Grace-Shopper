import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Grid from 'react-bootstrap/lib/Grid';
import { FieldGroup, Button } from 'react-bootstrap';
import { putUser } from '../store';

class AccountInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showForm: false
        };
        this.showForm = this.showForm.bind(this);
    }
    showForm() {
        this.setState({ showForm: !this.state.showForm });
    }
    render() {
        const { isAdmin, user } = this.props;
        return (
            <div className="account-page">
                <div className="nav-home">
                    {
                        isAdmin ?
                            <h3 className="home-welcome">Admin Profile</h3>
                            :
                            <h3 className="home-welcome">User Profile</h3>
                    }
                </div>
                <Grid className="all-categories-box">
                    <div className="edit-profile">
                        <form>
                            {
                                this.state.showForm ?
                                    (
                                        <div className="profile-form">
                                            <form onSubmit={(event) => this.props.handleSubmit(event, user)}>
                                                <h2>First Name: </h2>
                                                <h3><input name="firstName" defaultValue={user.firstName} type="string" /></h3>
                                                <h2>Last Name: </h2>
                                                <h3><input name="lastName" defaultValue={user.lastName} type="string" /></h3>
                                                <h3>Email: </h3>
                                                <h4><input name="email" defaultValue={user.email} type="string" /></h4>
                                                <h3>Password: </h3>
                                                <h4><input name="password" placeholder="Change Password" /></h4>
                                                <Button bsStyle="success" bsSize="xsmall" type="submit">Update Account</Button>
                                            </form>
                                            <Button bsStyle="danger" bsSize="xsmall" onClick={this.showForm}>Cancel</Button>
                                        </div>
                                    )
                                    :
                                    (
                                        <div className="profile">
                                            <h2>First Name: </h2>
                                            <h3>{user.firstName}</h3>
                                            <h2>Last Name: </h2>
                                            <h3>{user.lastName}</h3>
                                            <h3>Email: </h3>
                                            <h4>{user.email}</h4>
                                            <Button onClick={this.showForm} bsStyle="primary" bsSize="xsmall" >Edit Profile</Button>
                                        </div>
                                    )
                            }
                        </form>
                    </div>
                </Grid>
            </div>
        )
    }
}

const mapState = (state) => {
    return {
        user: state.user,
        isAdmin: !!state.user.admin
    }
}
const mapDispatch = (dispatch, ownProps) => {
    return {
        handleSubmit(event, user) {
            event.preventDefault();
            console.log('event', event.target);
            if (event.target.firstName.value) {
                user.firstName = event.target.firstName.value;
            }
            if (event.target.lastName.value) {
                user.lastName = event.target.lastName.value;
            }
            if (event.target.email.value) {
                user.cost = event.target.email.value;
            }
            if (event.target.password.value) {
                user.password = event.target.password.value;
            }
            dispatch(putUser(user, ownProps.history));
        }
    }
}
export default connect(mapState, mapDispatch)(AccountInfo);

AccountInfo.propTypes = {
    user: PropTypes.object,
    isAdmin: PropTypes.bool
}
