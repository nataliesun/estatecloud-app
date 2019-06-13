import React, { Component } from 'react';
import PropertyList from '../../components/PropertyList/PropertyList';

class Dashboard extends Component {
  addProperty = () => {
    this.props.history.push('/addProperty')
  }

  render() {
    return (
      <div className="Dashbaord" style={{ "textAlign": "center" }}>
        <h2>Dashboard</h2>
        <button onClick={this.addProperty}>Add new property</button>
        <PropertyList />
      </div>
    );
  }
}

export default Dashboard;