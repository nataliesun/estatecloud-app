import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';
import DateApiService from '../../services/date-api-service';



import './UserStats.scss';
import DateContext from '../../contexts/DateContext';

class UserStats extends Component {
  static contextType = DateContext

  static defaultProps = {
    availability: [1, 0, 0],
    portfolio_value: 0
  }

  componentDidMount() {
    DateApiService.getReservationsForUser()
      .then(count => this.context.setTotalReservations(count.count))
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
            <h3>{this.context.totalReservations}</h3>
            <p>Reservations</p>
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