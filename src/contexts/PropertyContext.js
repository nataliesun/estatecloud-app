import React, { Component } from 'react'


const PropertyContext = React.createContext({
  propertyData: {},
  error: null,
  setError: () => { },
  clearError: () => { },
  addProperty: () => { },
  clearProperty: () => { },

})

export default PropertyContext

export class PropertyProvider extends Component {
  state = {
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

  addProperty = property => {
    this.setProperties([
      ...this.state.properties,
      property
    ])
  }

  render() {
    const value = {

      propertyData: this.state.propertyData,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setPropertyData: this.setPropertyData,
      clearProperties: this.clearProperties,
      addProperty: this.addProperty,
    }
    return (
      <PropertyContext.Provider value={value}>
        {this.props.children}
      </PropertyContext.Provider>
    )
  }
}

