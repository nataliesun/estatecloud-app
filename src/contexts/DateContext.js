import React, { Component } from 'react'


const DateContext = React.createContext({
  totalReservations: 0,
  dates: [],
  error: null,
  setError: () => { },
  clearError: () => { },
  setDates: () => { },
  addReservation: () => { },
  removeReservation: () => { },
  setTotalReservations: () => { }
})

export default DateContext

export class DateProvider extends Component {
  state = {
    totalReservations: 0,
    dates: [],
    error: null,
  };

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  setDates = dates => {
    const formattedDates = dates.map(d => {

      return {
        ...d,
        start: new Date(d.start),
        end: new Date(d.end)
      }
    })
    this.setState({ dates: formattedDates })
  }

  addReservation = (reservation) => {
    this.setDates([...this.state.dates, reservation])
  }

  removeReservation = (reservationId) => {
    const newReservations = this.state.dates.filter(r => r.id !== reservationId)
    this.setState({
      dates: newReservations
    })
  }

  setTotalReservations = (count) => {
    this.setState({
      totalReservations: count
    })
  }


  render() {
    const value = {
      totalReservations: this.state.totalReservations,
      dates: this.state.dates,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setDates: this.setDates,
      addReservation: this.addReservation,
      removeReservation: this.removeReservation,
      setTotalReservations: this.setTotalReservations
    }
    return (
      <DateContext.Provider value={value}>
        {this.props.children}
      </DateContext.Provider>
    )
  }
}
