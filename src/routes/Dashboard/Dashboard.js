import React, { Component } from 'react';
import PropertyList from '../../components/PropertyList/PropertyList';
import UserStats from '../../components/UserStats/UserStats';

import './Dashboard.scss';

class Dashboard extends Component {
  addProperty = () => {
    this.props.history.push('/addProperty')
  }

  render() {
    return (
      <div className="Dashboard" style={{ "textAlign": "center" }}>
        <h2>Dashboard</h2>
        <button onClick={this.addProperty}>Add new property</button>
        <UserStats />
        <PropertyList />
      </div>
    );
  }
}

export default Dashboard;