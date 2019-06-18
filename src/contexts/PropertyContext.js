import React, { Component } from 'react'


const PropertyContext = React.createContext({
  properties: [],
  error: null,
  setError: () => { },
  clearError: () => { },
  addProperty: () => { },
  clearProperty: () => { },

})

export default PropertyContext

export class PropertyProvider extends Component {
  state = {
    properties: [],
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

  setProperties = properties => {
    this.setState({ properties })
  }

  addProperty = property => {
    this.setProperties([
      ...this.state.properties,
      property
    ])
  }

  render() {
    const value = {

      properties: this.state.properties,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setProperties: this.setProperties,
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

