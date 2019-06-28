import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TokenService from '../../services/token-service';
import './NavBar.scss';
import PropertyContext from '../../contexts/PropertyContext';

class NavBar extends Component {
  static contextType = PropertyContext


  componentDidMount() {
    TokenService.hasAuthToken() ? this.context.handleLoginSuccess() : this.context.handleLogout()
  }

  handleLogoutClick = () => {
    TokenService.clearAuthToken();
    this.context.handleLogout()
    window.location.reload();
  };

  renderLogoutLink() {
    return (
      <>
        <li>
          <NavLink to='/dashboard' >
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/addProperty">
            <FontAwesomeIcon icon="plus" className="blue" /> Property
          </NavLink>
        </li>
        <li>
          <NavLink to='/friends' >
            <FontAwesomeIcon icon="search" className="blue" />{" "}
            Friends
          </NavLink>
        </li>
        <li onClick={this.handleLogoutClick}>
          Logout
        </li>
      </>
    );
  }

  renderLoginLink() {
    return (
      <>
        <li>
          <NavLink to="/register">
            Register
          </NavLink>
        </li>
        <li>
          <NavLink to='/login' >
            Login
          </NavLink>
        </li>
      </>
    );
  }

  navSlide = (ev) => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');


    nav.classList.toggle('nav-active');

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
      }
    });

    //burger animation
    burger.classList.toggle('toggle');

  }

  render() {
    const links = this.context.loggedIn ? this.renderLogoutLink() : this.renderLoginLink();
    return (
      <>
        <div className="NavBar__outer">
          <nav className="NavBar">
            <NavLink to="/">
              <FontAwesomeIcon className="blue" icon="door-open" />
              <h1>
                EstateCloud
              </h1>
            </NavLink>
            <div className="burger" onClick={e => this.navSlide(e)}>
              <div className="line1"></div>
              <div className="line2"></div>
              <div className="line3"></div>
            </div>
            <ul className="nav-links">
              {links}
            </ul>

          </nav>
        </div>
      </>
    );
  }
}

export default NavBar;