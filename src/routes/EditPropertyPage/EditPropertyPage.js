import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import EditPropertyForm from '../../components/EditPropertyForm/EditPropertyForm';

import './EditPropertyPage.scss'

class EditPropertyPage extends Component {
  render() {
    return (
      <div className="EditPropertyPage">
        <ul className="breadcrumb">
          <li>
            <Link to="/dashboard">
              Dashboard
            </Link>
          </li>
          <li>
            Edit Property
          </li>
        </ul>
        <EditPropertyForm />
      </div>
    );
  }
}

export default EditPropertyPage;