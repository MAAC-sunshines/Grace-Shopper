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
        const { isAdmin } = this.props.isAdmin;
        console.log('isAdmin', this.props);
        return (
            <div>
                {
                    isAdmin && (
                        <div>
                            <h2>Users</h2>
                            <h3>Users will show up here</h3>
                            {
                                allUsers && allUsers.map(user => {
                                    return (
                                        <div key={user.id}>
                                            <h4>Name: {user.firstName}</h4>
                                        </div>
                                    )
                                })
                            }
                        </div >
                    )
                }
            </div>
        )
    }
}
