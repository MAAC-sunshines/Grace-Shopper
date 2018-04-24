import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Image, Button, ListGroup, ListGroupItem } from 'react-bootstrap';
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

        return (
            <Grid className="all-categories-box">
                <div>
                    {
                        isAdmin && (
                            <div className="users-list">
                                <h2>Users</h2>
                                <ListGroup>
                                {
                                    allUsers && allUsers.map(user => {

                                        return (
                                            <div key={user.id} className="user-list">
                                                <ListGroupItem
                                                header={user.admin ? ('Admin') : ('User')}
                                                href="#">
                                                <Link to={`/users/${user.id}`}>
                                                    <h5>
                                                    {user.firstName} {user.lastName}
                                                    </h5>
                                                    <h5>Email: {user.email}</h5>
                                                </Link>
                                                <div>
                                                {
                                                    user.admin
                                                    ?
                                                    <Button bsStyle="danger" bsSize="xsmall" onClick={(event) => this.props.updateAdmin(event, user)}>Remove Admin</Button>
                                                    :
                                                    <div>
                                                    <Button bsStyle="primary" bsSize="xsmall" onClick={(event) => this.props.updateAdmin(event, user)}>Make Admin</Button>
                                                    <Button bsStyle="danger" bsSize="xsmall" onClick={(event) => this.props.handleDelete(event, user)}>Delete User</Button>
                                                    </div>
                                                }
                                                </div>
                                                </ListGroupItem>
                                            </div>
                                        )
                                    })
                                }
                                </ListGroup>
                            </div>
                        )
                    }
                </div>
            </Grid>
        )
    }
}
