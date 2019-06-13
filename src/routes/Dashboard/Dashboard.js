import React, { Component } from 'react';

class Dashboard extends Component {
  addProperty = () => {
    this.props.history.push('/addProperty')
  }

  render() {
    return (
      <div className="Dashbaord" style={{ "textAlign": "center" }}>
        <h2>Dashboard</h2>
        <button onClick={this.addProperty}>Add new property</button>
      </div>
    );
  }
}

export default Dashboard;