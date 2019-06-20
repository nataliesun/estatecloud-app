import React from 'react'
import Calendar from "react-big-calendar";
// import Views from "react-big-calendar";
// import ExampleControlSlot from './ExampleControlSlot'
import moment from "moment";
import DateContext from '../../contexts/DateContext';

const propTypes = {}


class SelectableCalendar extends React.Component {
  static contextType = DateContext



  handleSelect = ({ start, end }) => {
    const title = window.prompt('New Event name')
    if (title)
      this.setState({
        events: [
          ...this.state.events,
          {
            start,
            end,
            title,
          },
        ],
      })
  }

  render() {
    const calendarClasses = this.props.receded ? 'recede SelectableCalendar' : 'SelectableCalendar';
    const localizer = Calendar.momentLocalizer(moment);
    return (
      <div className={calendarClasses} style={{ "height": "70vh" }}>
        {this.context.dates.length && <Calendar
          // selectable
          localizer={localizer}
          events={this.context.dates}
          // defaultView={Views.WEEK}
          scrollToTime={new Date(1970, 1, 1, 6)}
          defaultDate={new Date(Date.now())}
          onSelectEvent={event => alert(event.title)}
        // onSelectSlot={this.handleSelect}
        />}
      </div>
    )
  }
}

SelectableCalendar.propTypes = propTypes

export default SelectableCalendar