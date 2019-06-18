import React, { Component } from "react";
import moment from "moment";


import './Schedule.scss'
import SelectableCalendar from "../SelectableCalendar/SelectableCalendar";


class Schedule extends Component {
  state = {
    events: [
      {
        start: new Date(),
        end: new Date(moment().add(1, "days")),
        title: "Some title"
      }
    ]
  };

  render() {
    return (
      <div className="Schedule">
        <SelectableCalendar />
      </div>
    );
  }
}

export default Schedule