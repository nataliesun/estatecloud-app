import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service';
import './NavBar.scss';

class NavBar extends Component {
  handleLogoutClick = () => {
    TokenService.clearAuthToken();
  };

  renderLogoutLink() {
    return (
      <div className="NavBar__logged-in">
        <Link to="/dashboard">Dashboard</Link>
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
          {TokenService.hasAuthToken()
            ? this.renderLogoutLink()
            : this.renderLoginLink()
          }
        </nav>
        <span className="NavBar__tagline--narrow">
          Manage your properties.
        </span>
      </>
    );
  }
}

export default NavBar;