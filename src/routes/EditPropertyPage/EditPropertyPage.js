import React, { Component } from 'react';
import EditPropertyForm from '../../components/EditPropertyForm/EditPropertyForm';

import './EditPropertyPage.scss'

class EditPropertyPage extends Component {
  render() {
    return (
      <div className="EditPropertyPage">
        <h2 >Edit Property</h2>
        <EditPropertyForm />
      </div>
    );
  }
}

export default EditPropertyPage;