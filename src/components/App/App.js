import React from 'react'
import { Route, Switch } from 'react-router-dom'
import NavBar from '../NavBar/NavBar'
import LandingPage from '../../routes/LandingPage/LandingPage'
import RegistrationPage from '../../routes/RegistrationPage/RegistrationPage'
import Dashboard from '../../routes/Dashboard/Dashboard'
import NewPropertyForm from '../../components/NewPropertyForm/NewPropertyForm'

import properties from '../../components/dummyProperties';
import PropertyContext from '../../contexts/PropertyContext';

import './App.scss';

class App extends React.Component {
  static contextType = PropertyContext
  componentDidMount() {

    this.context.setProperties(properties.properties)
  }
  render() {

    return (
      <div className="App">
        <header className="App__header">
          <NavBar />
        </header>

        <main className="App__main">
          {/* {this.state.hasError && (
            <p className="red">There was an error! Oh no!</p>
          )} */}
          <Switch>
            <Route exact path={'/'} component={LandingPage} />
            {/* <Route path={'/login'} component={LoginPage} /> */}
            <Route path={'/register'} component={RegistrationPage} />
            <Route path={'/dashboard'} component={Dashboard} />
            <Route path={'/addProperty'} component={NewPropertyForm} />
            {/* <Route component={NotFoundPage} /> */}
          </Switch>
        </main>

      </div>
    );
  }


}

export default App;
