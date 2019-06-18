import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TokenService from '../../services/token-service';
import './NavBar.scss';

class NavBar extends Component {
  handleLogoutClick = () => {
    TokenService.clearAuthToken();
  };



  renderLogoutLink() {
    return (
      <div className="NavBar__logged-in">
        <Link className="" to="/dashboard">
          <span id="nav_dash" onClick={e => this.handleNavClick(e)}>
            Dashboard
          </span>
        </Link>
        <Link onClick={this.handleLogoutClick} to="/">
          Logout
        </Link>
      </div>
    );
  }

  renderLoginLink() {
    return (
      <div className="NavBar__not-logged-in">
        <Link to="/login">
          <span id="nav_login" onClick={e => this.handleNavClick(e)}>
            Login
          </span>
        </Link>
        <Link to="/register">Register</Link>
      </div>
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
              <li>
                <NavLink to="/addProperty">
                  <FontAwesomeIcon icon="plus" className="blue" /> Property

                </NavLink>
              </li>
              <li>
                <NavLink to='/dashboard' >
                  Dashboard
              </NavLink>
              </li>
              <li>

                <NavLink to='/'>
                  Logout
              </NavLink>
              </li>
            </ul>

          </nav>
        </div>
      </>
    );
  }
}

export default NavBar;