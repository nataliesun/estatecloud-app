import React from 'react'
import Calendar from "react-big-calendar";
import Views from "react-big-calendar";
import moment from "moment";
import DateContext from '../../contexts/DateContext';
import ReservationModal from '../Modals/ReservationModal/ReservationModal';

import './SelectableCalendar.scss'
import DateApiService from '../../services/date-api-service';

const propTypes = {}


class SelectableCalendar extends React.Component {
  static contextType = DateContext

  state = {
    modalOpen: false,
    reservation: {
      title: '',
      id: null
    }
  }

  openModal = (event) => {
    DateApiService.getReservationDetails(event.id)
      .then(details => {
        this.setState({
          modalOpen: !this.state.modalOpen,
          reservation: {
            title: event.title,
            createdBy: details.first_name,
            createdOn: new Date(details.date_created).toLocaleDateString(),
            id: event.id
          }
        })
      })
      .catch(this.context.setError)
  }

  handleClose = () => {
    this.setState({
      modalOpen: !this.state.modalOpen,
      reservation: {
        title: '',
        id: null
      }
    })
  }

  render() {
    const { modalOpen, reservation } = this.state;

    const calendarClasses = this.props.receded || modalOpen ? 'recede SelectableCalendar' : 'SelectableCalendar';
    const localizer = Calendar.momentLocalizer(moment);
    return (
      <>
        <div className={calendarClasses} >
          <Calendar
            // selectable
            localizer={localizer}
            events={this.context.dates}
            defaultView={Views.WEEK}
            scrollToTime={new Date(1970, 1, 1, 6)}
            defaultDate={new Date(Date.now())}
            onSelectEvent={ev => this.openModal(ev)}
          />
        </div>
        <ReservationModal open={modalOpen} reservation={reservation} handleClose={this.handleClose} />
      </>
    )
  }
}

SelectableCalendar.propTypes = propTypes

export default SelectableCalendar