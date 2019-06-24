import React, { Component } from 'react';

import './ReservationModal.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DateApiService from '../../../services/date-api-service';
import DateContext from '../../../contexts/DateContext';

class ReservationModal extends Component {
  static contextType = DateContext

  static defaultProps = {
    open: '',
    handleClose: () => { },
    reservation: {
      title: '',

    }
  }

  handleDeleteReservation = () => {
    const { id } = this.props.reservation
    DateApiService.deleteReservation(id)
      .then(this.context.removeReservation(id))
      .catch(this.context.setError)

    this.props.handleClose()
  }

  render() {
    const { open, handleClose, reservation } = this.props;

    const classes = open ? 'ReservationModal' : 'closed ReservationModal';


    return (
      <div className={classes}>
        <span className="close-modal" onClick={handleClose}>
          <FontAwesomeIcon icon="times" />
        </span>
        <h3>
          {reservation.title}
        </h3>
        <p>Info</p>
        <button onClick={this.handleDeleteReservation} id="submit-btn">Delete</button>
      </div>
    );
  }
}

export default ReservationModal;