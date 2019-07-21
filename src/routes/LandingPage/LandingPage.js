import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import collecting from './undraw_collecting.svg';
import noteList from './undraw_note_list.svg'
import calendar from './undraw_calendar.svg'
import vector from './vector.png'
import vid from './AddProp.mp4'

import './LandingPage.scss';
import CreateDemoBtn from '../../components/CreateDemoBtn/CreateDemoBtn';

class LandingPage extends Component {
  render() {
    return (
      <div className="LandingPage">
        <main>
          <h2>Property</h2>
          <h1>Mangement</h1>
          <CreateDemoBtn />
          <img id="crystal-vector" src={vector} alt="crystal-vector" />
        </main>
        <section id="video-section">
          <div id="video-div">
            <video src={vid} alt="add-vid" autoPlay loop />
          </div>
        </section>
        <div id="description-sections">
          <section className="description-section">
            <h3><span>_</span>01</h3>
            <div className="contents">
              <div className="description">
                <h3>Get organized</h3>
                <p>Keep all your properties information in one place, so you never miss an important date.</p>
              </div>
              <img src={collecting} alt="collecting" />
            </div>
          </section>
          <section className="description-section">

            <h3><span>_</span>02</h3>
            <div className="contents">
              <img src={noteList} alt="collecting" />
              <div className="description">
                <h3>Information at a glance</h3>
                <p>EstateCloud provides you with a quick and simple interface that helps you keep track of what's happening at your properties.</p>
              </div>
            </div>
          </section>
          <section className="description-section">
            <h3><span>_</span>03</h3>
            <div className="contents">
              <div className="description">
                <h3>Find Your Friends</h3>
                <p>Connect interactive calendars to track who's staying when and where.</p>
              </div>
              <img src={calendar} alt="collecting" />
            </div>
          </section>
          <section id="last-section">
            <h3>Start managing today</h3>
            <button>
              <Link to="/register">Get started - it's free!</Link>
            </button>
          </section>
        </div>
      </div>
    );
  }
}

export default LandingPage;