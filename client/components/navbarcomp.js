import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../store'
import { Navbar, Nav, NavItem } from 'react-bootstrap';

const NavbarComp = ({ handleClick, isLoggedIn }) => (

    <Navbar className="nav-bar" fixedTop>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/">
            <h1>AIRPLAY</h1>
          </Link>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        {isLoggedIn ? (
          <div>
            {/* The navbar will show these links after you log in */}
            <Link to="/home">Home</Link>
            <button onClick={handleClick}>
              Logout
            </button>
          </div>
        ) : (
            <div>
              {/* The navbar will show these links before you log in */}
                <Link to="/instruments" className="nav-bar-item">All Instruments</Link>
                <Link to="/login" className="nav-bar-item">Login</Link>
                <Link to="/signup" className="nav-bar-item">Sign Up</Link>

            </div>
          )}
      </Nav>
      <hr />
    </Navbar>


)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(NavbarComp)

/**
 * PROP TYPES
 */
NavbarComp.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
