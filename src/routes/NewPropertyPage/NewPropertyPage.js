import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import NewPropertyForm from '../../components/NewPropertyForm/NewPropertyForm';

import './NewPropertyPage.scss'

class NewPropertyPage extends Component {
  render() {
    return (
      <div className="NewPropertyPage">
        <ul className="breadcrumb">
          <li>
            <Link to="/dashboard">
              Dashboard
            </Link>
          </li>
          <li>
            Add New Property
          </li>
        </ul>
        <NewPropertyForm />
      </div>
    );
  }
}

export default NewPropertyPage;