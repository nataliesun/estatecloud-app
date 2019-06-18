import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';
import PropertyContext from '../../contexts/PropertyContext'


import './UserStats.scss';

class UserStats extends Component {
  static contextType = PropertyContext;

  render() {
    const { properties } = this.context;

    return (
      <div className="UserStats">
        <div className="stat-container">
          <div className="other-stats">
            <Doughnut
              data={createAvailabilityChart(properties)}
              options={{
                maintainAspectRatio: true,
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
          <h3>{properties.length && calculatePortfolioValue(properties)}</h3>
          <p>Estimated Portfolio Value</p>
        </div>
      </div>
    );
  }
}

export default UserStats;

function createAvailabilityChart(properties) {
  const labels = ["Available", "Occupied", "Rented"]
  const data = [0, 0, 0]

  for (let i = 0; i < properties.length; i++) {
    if (properties[i].status === "available")
      data[0] = data[0] + 1

    else if (properties[i].status === "occupied")
      data[1] = data[1] + 1

    else
      data[2] = data[2] + 1
  }

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

function calculatePortfolioValue(properties) {
  let total = 0;

  for (let i = 0; i < properties.length; i++) {
    let current = parseInt(properties[i]["initial_price"]);
    total = total + current;
  }
  return total.toLocaleString()
}