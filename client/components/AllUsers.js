import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Image, Button } from 'react-bootstrap';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

export default class AllUsers extends Component {
    componentDidMount() {
        this.props.loadAllUsers();
    }
    render() {
        const allUsers = this.props.users;
        const isAdmin = this.props.isAdmin;
        console.log('allUsers', allUsers);
        return (
            <Grid className="all-categories-box">
                <div>
                    {
                        isAdmin && (
                            <div className="subheader">
                                <h2>Users</h2>
                                {
                                    allUsers && allUsers.map(user => {

                                        return (
                                            <div key={user.id}>
                                                <h4>Email: {user.email}</h4>
                                                <h5>User ID: {user.id}</h5>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        )
                    }
                </div>
            </Grid>
        )
    }
}
