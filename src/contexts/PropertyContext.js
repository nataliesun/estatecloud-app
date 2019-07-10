import React, { Component } from 'react'

export const nullPropertyData = {
  properties: []
}


const PropertyContext = React.createContext({
  properties: [],
  loggedIn: false,
  propertyData: {},
  error: null,
  setError: () => { },
  clearError: () => { },
  addProperty: () => { },
  removeProperty: () => { },
  handleLoginSuccess: () => { },
  handleLogout: () => { },
  setProperties: () => { },
})

export default PropertyContext

export class PropertyProvider extends Component {
  state = {
    properties: [],
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
    this.setState({
      properties: [
        ...this.state.properties,
        property
      ]
    })
  }

  removeProperty = (propertyId) => {
    const newProperties = this.state.properties.filter(p => p.id !== propertyId)
    this.setState({
      properties: newProperties
    })
  }


  setPropertyData = propertyData => {
    if (!propertyData.properties) {
      return this.setState({ propertyData: nullPropertyData })
    }
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

  setProperties = (properties) => {
    this.setState({
      properties
    })
  }

  render() {
    const value = {
      loggedIn: this.state.loggedIn,
      properties: this.state.properties,
      propertyData: this.state.propertyData,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setPropertyData: this.setPropertyData,
      addProperty: this.addProperty,
      removeProperty: this.removeProperty,
      handleLoginSuccess: this.handleLoginSuccess,
      handleLogout: this.handleLogout,
      setProperties: this.setProperties
    }
    return (
      <PropertyContext.Provider value={value}>
        {this.props.children}
      </PropertyContext.Provider>
    )
  }
}

