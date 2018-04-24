import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout, fetchCart } from '../store'
import { Navbar, Nav, NavItem, SplitButton, MenuItem } from 'react-bootstrap';

class NavbarComp extends Component {
  componentDidMount() {
    this.props.loadCart();
  }
  render() {
    const { handleClick, isLoggedIn, isAdmin, cart } = this.props
    const totalItems = cart.reduce(((sum, item) => {
      sum += item.quantity;
      return sum
    }), 0)
    return (
      <Navbar className="nav-bar" fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">
              <h1 className="navbar-logo">AirPlay</h1>
            </Link>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          {isLoggedIn ? (
            <div>
              {/* The navbar will show these links after you log in */}
              <Link to="/home" className="nav-bar-item">Home</Link>
              <Link to="/categories" className="nav-bar-item">Categories</Link>
              <Link to="/instruments" className="nav-bar-item">All Instruments</Link>
              {
                isAdmin &&
                <Link to="/users" className="nav-bar-item">Users</Link>
              }
              <Link to="/" className="nav-bar-item" onClick={handleClick}>
                Logout
              </Link>
              <Link to="/cart" className="nav-bar-item">
                {totalItems}
                <img id="cart-icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Shopping_cart_icon.svg/2000px-Shopping_cart_icon.svg.png" />
              </Link>
            </div>
          ) : (
              <div>
                {/* The navbar will show these links before you log in */}
                <Link to="/instruments" className="nav-bar-item">All Instruments</Link>
                <Link to="/categories" className="nav-bar-item">Categories</Link>
                <Link to="/login" className="nav-bar-item">Login</Link>
                <Link to="/signup" className="nav-bar-item">Sign Up</Link>
                <Link to="/cart" className="nav-bar-item">
                  {totalItems}
                  <img id="cart-icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Shopping_cart_icon.svg/2000px-Shopping_cart_icon.svg.png" />
                </Link>
              </div>
            )}
        </Nav>
        <hr />
      </Navbar>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id,
    isAdmin: !!state.user.admin,
    cart: state.cart
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    },
    loadCart() {
      dispatch(fetchCart());
    }
  }
}

export default connect(mapState, mapDispatch)(NavbarComp)

/**
 * PROP TYPES
 */
NavbarComp.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  isAdmin: PropTypes.bool.isRequired,
  cart: PropTypes.array
}
