import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';


import './UserStats.scss';

class UserStats extends Component {
  static defaultProps = {
    availability: [1, 0, 0],
    portfolio_value: 0
  }

  render() {
    const { availability, portfolio_value } = this.props;

    return (
      <div className="UserStats">
        <div className="stat-container">
          <div className="other-stats">
            <Doughnut
              data={createAvailabilityChart(availability)}
              options={{
                maintainAspectRatio: false,
                responsive: true,
                legend: {
                  display: false
                }
              }}
            />
            <p>Availability</p>
          </div>
          <div className="other-stats">
            Stat 2
          </div>
        </div>
        <div className="portfolio_value">
          <h3>{portfolio_value && portfolio_value.toLocaleString()}</h3>
          <p>Estimated Portfolio Value</p>
        </div>
      </div>
    );
  }
}

export default UserStats;

function createAvailabilityChart(availability) {
  const labels = ["Available", "Occupied", "Rented"]
  const data = availability


  return {
    labels,
    datasets: [
      {
        data,
        backgroundColor: [
          "rgb(255, 121, 121)", "#7979ff", "#70dfba"
        ]
      }
    ]
  }
}