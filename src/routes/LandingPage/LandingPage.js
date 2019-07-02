import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import collecting from './undraw_collecting.svg';
import noteList from './undraw_note_list.svg'
import calendar from './undraw_calendar.svg'
import vid from './addProp.mp4'

import './LandingPage.scss';

class LandingPage extends Component {
  render() {
    return (
      <div className="LandingPage">
        <main>
          <h5>Organize and visualize all your property info in one place</h5>
          <p>Upload and edit property information then analyze reservations across your properties and connect with friends.</p>

          <button><Link to="/register">Sign up</Link></button>
        </main>
        <section id="video-section">
          <div id="video-div">
            <video src={vid} alt="add-vid" autoPlay loop />
          </div>
          <div id="floating">
            <img src="https://px6vg4ekvl21gtxs836x5jyx-wpengine.netdna-ssl.com/wp-content/uploads/2017/03/img45.png" className="float-1" alt="img45" width=""></img>
            <img src="https://px6vg4ekvl21gtxs836x5jyx-wpengine.netdna-ssl.com/wp-content/uploads/2019/03/decor02.png" className="float2" alt="decor02" width="247"></img>
          </div>

        </section>
        <section className="blurb">
          <div className="description">
            <h3><span>_</span>01</h3>
            <h3>Get organized</h3>
            <p>Keep all your properties information in one place, so you never miss an important date.</p>
            <img src={collecting} alt="collecting" />
          </div>
        </section>
        <section className="blurb">
          <div className="description">
            <h3><span>_</span>02</h3>
            <h3>Information at a glance</h3>
            <p>EstateCloud provides you with a quick and simple interface that helps you keep track of what's happening at your properties.</p>
            <img src={noteList} alt="note list" />
          </div>
        </section>
        <section className="blurb">
          <div className="description">
            <h3><span>_</span>03</h3>
            <h3>Find Your Friends</h3>
            <p>Connect interactive calendars to track who's staying when and where.</p>
            <img src={calendar} alt="calendar" />
          </div>
        </section>

        <section id="last-section">
          <h3>Start managing today</h3>
          <Link to="/register">Get started - it's free!</Link>
        </section>
      </div>
    );
  }
}

export default LandingPage;