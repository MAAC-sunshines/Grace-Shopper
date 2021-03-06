import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import { Link } from 'react-router-dom';

/**
 * COMPONENT
 */
export const UserHome = (props) => {
  const { email, isAdmin, userId } = props
  const { firstName } = props || email
  return (
    <div className="account-page">
      <div className="nav-home">
        <h3 className="home-welcome">Welcome {firstName}!</h3>
      </div>
      <div className="center-box">
      <Grid className="all-categories-box">
        <Row className="row-mapping">
          <Col md={3} className="category-box">
            <Link to={`/order-history/${userId}`}>
              <img className="thumbnail-photo" src="https://cdn.iconscout.com/public/images/icon/premium/png-512/order-history-30028b0173aa6535-512x512.png" />
              <h4 className="home-boxes">Your Order History</h4>
            </Link>
          </Col>
          <Col md={3} className="category-box">
            <Link to="/account">
              <img className="thumbnail-photo" src="https://cdn0.iconfinder.com/data/icons/metro-style-people-svg-icons/48/User_info-512.png" />
              <h4 className="home-boxes">Profile</h4>
            </Link>
          </Col>
          {
            isAdmin &&
              <Col md={3} className="category-box">
                <Link to="/users">
                  <img className="thumbnail-photo" src="http://simpleicon.com/wp-content/uploads/users.png" />
                  <h4 className="home-boxes">User Database</h4>
                </Link>
              </Col>
          }
          {
              isAdmin &&
              <Col md={3} className="category-box">
                <Link to="/order-history">
                  <img className="thumbnail-photo" src="https://cdn.iconscout.com/public/images/icon/premium/png-512/order-list-shop-cart-book-reserve-bill-shopping-358459b97c51008e-512x512.png" />
                  <h4 className="home-boxes">All Orders</h4>
                </Link>
              </Col>
          }
        </Row>
      </Grid>
      </div>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    email: state.user.email,
    firstName: state.user.firstName,
    isAdmin: !!state.user.admin,
    userId: state.user.id
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string,
  firstName: PropTypes.string,
  isAdmin: PropTypes.bool,
  userId: PropTypes.number
}
