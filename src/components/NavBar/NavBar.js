import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.scss';

class NavBar extends Component {
  handleLogoutClick = () => {

  };

  renderLogoutLink() {
    return (
      <div className="NavBar__logged-in">
        <Link onClick={this.handleLogoutClick} to="/">
          Logout
        </Link>
      </div>
    );
  }

  renderLoginLink() {
    return (
      <div className="NavBar__not-logged-in">
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    );
  }

  render() {
    return (
      <>
        <nav className="NavBar">
          <h1>
            <Link to="/">
              EstateCloud
            </Link>
          </h1>
          <span className="NavBar__tagline--wide">
            Property managment tool
          </span>
          {this.renderLoginLink()}
        </nav>
        <span className="NavBar__tagline--narrow">
          Manage your properties.
        </span>
      </>
    );
  }
}

export default NavBar;