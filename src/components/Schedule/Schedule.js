import React, { Component } from "react";
import DateApiService from '../../services/date-api-service';


import './Schedule.scss'
import SelectableCalendar from "../SelectableCalendar/SelectableCalendar";
import DateModal from "../Modals/DateModal/DateModal";
import DateContext from "../../contexts/DateContext";


class Schedule extends Component {
  static contextType = DateContext

  static defaultProps = {
    match: {
      params: {}
    }
  }

  state = {
    modalClosed: true,
    recedeCalendar: false
  };

  handleBtnClick = () => {
    this.setState({
      modalClosed: !this.state.modalClosed,
      recedeCalendar: !this.state.recedeCalendar
    })
  }

  componentDidMount() {
    DateApiService.getDatesForProperty(this.props.match.params.property_id)
      .then(reservations => this.context.setDates(reservations))
      .catch(this.context.setError)

  }

  render() {
    return (
      <div className="Schedule">
        <button id="Schedule__btn" onClick={this.handleBtnClick}>Add Reservation</button>
        <DateModal hidden={this.state.modalClosed} handleClose={this.handleBtnClick} {...this.props} />
        <SelectableCalendar receded={this.state.recedeCalendar} />
      </div>
    );
  }
}

export default Schedule