import React, { Component } from 'react'


const PropertyContext = React.createContext({
  propertyData: {},
  error: null,
  setError: () => { },
  clearError: () => { },
  addProperty: () => { },
  clearProperty: () => { },
  handleLoginSuccess: () => { },
  handleLogout: () => { }
})

export default PropertyContext

export class PropertyProvider extends Component {
  state = {
    loggedIn: false,
    propertyData: {},
    error: null,
  };

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  clearProperties = () => {
    this.setProperties([])
  }

  setPropertyData = propertyData => {
    this.setState({ propertyData })
  }

  handleLoginSuccess = () => {
    this.setState({
      loggedIn: true
    })

  }

  handleLogout = () => {
    this.setState({
      loggedIn: false
    })
  }

  render() {
    const value = {
      loggedIn: this.state.loggedIn,
      propertyData: this.state.propertyData,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setPropertyData: this.setPropertyData,
      clearProperties: this.clearProperties,
      addProperty: this.addProperty,
      handleLoginSuccess: this.handleLoginSuccess,
      handleLogout: this.handleLogout
    }
    return (
      <PropertyContext.Provider value={value}>
        {this.props.children}
      </PropertyContext.Provider>
    )
  }
}

