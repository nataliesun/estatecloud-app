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
        <img src={schedule} alt="schedule" className="hero" />
        <section>
          <h3>Get organized</h3>
          <div className="description">
            <img src={collecting} alt="collecting" />
            <p>EstateCloud helps you visualize all your properties in one place, so you never miss an important date.</p>
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
            <p>Interactive calendars to help you keep track of who's staying when and where.</p>
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