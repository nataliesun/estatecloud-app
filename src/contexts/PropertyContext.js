import React, { Component } from 'react'

const nullPropertyData = {
  properties: []
}


const PropertyContext = React.createContext({
  propertyData: {},
  error: null,
  setError: () => { },
  clearError: () => { },
  addProperty: () => { },
  removeProperty: () => { },
  handleLoginSuccess: () => { },
  handleLogout: () => { }
})

export default PropertyContext

export class PropertyProvider extends Component {
  state = {
    propertyData: nullPropertyData,
    loggedIn: false,
    error: null,
  };

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  addProperty = (property) => {
    // console.log(property)
    this.setState({
      propertyData: {
        properties: [
          ...this.state.propertyData.properties,
          property
        ]
      }
    })
  }

  removeProperty = (propertyId) => {
    const newProperties = this.state.propertyData.properties.filter(p => p.id !== propertyId)
    this.setState({
      propertyData: {
        properties: newProperties
      }
    })
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
      addProperty: this.addProperty,
      removeProperty: this.removeProperty,
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

