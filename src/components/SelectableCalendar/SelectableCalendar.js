import React from 'react'
import Calendar from "react-big-calendar";
import Views from "react-big-calendar";
import moment from "moment";
import DateContext from '../../contexts/DateContext';
import ReservationModal from '../Modals/ReservationModal/ReservationModal';

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
    // console.log(event.id)
    this.setState({
      modalOpen: !this.state.modalOpen,
      reservation: {
        title: event.title,
        id: event.id
      }
    })
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
        <div className={calendarClasses} style={{ "height": "70vh" }}>
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