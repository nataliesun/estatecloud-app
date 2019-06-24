import React, { Component } from 'react';
import './DateModal.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DateRangePicker from '@wojtekmaj/react-daterange-picker'
import DateContext from '../../../contexts/DateContext';
import DateApiService from '../../../services/date-api-service';

class DateModal extends Component {
  static contextType = DateContext

  state = {
    date: [new Date(), new Date()],
  }

  onDateChange = date => {
    return this.setState({ date })
  }

  handleSubmitDates = (ev) => {
    ev.preventDefault()

    this.context.clearError()

    const newReservation = {
      property_id: this.props.match.params.property_id,
      title: ev.target.name.value,
      start_date: this.state.date[0],
      end_date: this.state.date[1]
    }

    DateApiService.postReservation(newReservation)
      .then(this.context.addReservation)
      .then(this.props.handleClose())
      .catch(this.context.setError)


  }


  render() {
    const modalClasses = this.props.hidden ? 'closed DateModal' : 'DateModal';

    return (
      <div className={modalClasses}>
        <span className="close-modal" onClick={this.props.handleClose}>
          <FontAwesomeIcon icon="times" />
        </span>
        <form onSubmit={this.handleSubmitDates}>
          <h3>New Reservation</h3>
          <input name="name" type="text" id="name" placeholder="Reservation title" />
          <DateRangePicker
            onChange={this.onDateChange}
            value={this.state.date}
          />
          <button type="submit" id="submit-btn">Submit</button>

        </form>
      </div>
    );
  }
}

export default DateModal;