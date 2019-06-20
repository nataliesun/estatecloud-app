import React, { Component } from 'react'


const DateContext = React.createContext({
  dates: [],
  error: null,
  setError: () => { },
  clearError: () => { },
  setDates: () => { },
  addReservation: () => { }
})

export default DateContext

export class DateProvider extends Component {
  state = {
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
    this.setState({ dates })
  }

  addReservation = (reservation) => {
    this.setState({
      dates: [...this.state.dates, reservation]
    })
  }


  render() {
    const value = {
      dates: this.state.dates,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setDates: this.setDates,
      addReservation: this.addReservation
    }
    return (
      <DateContext.Provider value={value}>
        {this.props.children}
      </DateContext.Provider>
    )
  }
}
