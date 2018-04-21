import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Grid from 'react-bootstrap/lib/Grid';

export function AccountInfo(props) {
    const { email } = props
    const { firstName } = props || email
    return (
        <Grid className="all-categories-box">
            <div className="subheader">
                <h2>Edit Shit</h2>
            </div>
        </Grid>
    )
}

const mapState = (state) => {
    return {
        email: state.user.email,
        firstName: state.user.firstName
    }
}
export default connect(mapState)(AccountInfo);

AccountInfo.propTypes = {
    email: PropTypes.string,
    firstName: PropTypes.string
}
