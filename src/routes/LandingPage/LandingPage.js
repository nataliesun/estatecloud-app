import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import collecting from './undraw_collecting.svg';
import noteList from './undraw_note_list.svg'
import calendar from './undraw_calendar.svg'
import schedule from './undraw_schedule.svg'

import './LandingPage.scss';

class LandingPage extends Component {
  render() {
    return (
      <div className="LandingPage">
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
          <polygon className="svg--sm" fill="white" points="0,0 30,100 65,21 90,100 100,75 100,100 0,100" />
          <polygon className="svg--lg" fill="white" points="0,0 15,100 33,21 45,100 50,75 55,100 72,20 85,100 95,50 100,80 100,100 0,100" />
        </svg> */}
        <img src={schedule} alt="schedule" className="hero" />
        <section>
          <h3>Get organized</h3>
          <div className="description">
            <img src={collecting} alt="collecting" />
            <p>Keep all your properties information in one place, so you never miss an important date.</p>
          </div>
        </section>
        <section>
          <h3>Information at a glance</h3>
          <div className="description">
            <img src={noteList} alt="note list" />
            <p>EstateCloud provides you with a quick and simple interface that helps you keep track of what's happening at your properties.</p>
          </div>
        </section>
        <section>
          <h3>Connect with your friends</h3>
          <div className="description">
            <img src={calendar} alt="calendar" />
            <p>Interactive calendars to track who's staying when and where.</p>
          </div>
        </section>

        <section>
          <h3>Start managing today</h3>
          <Link to="/register">Get started - it's free!</Link>
        </section>
      </div>
    );
  }
}

export default LandingPage;