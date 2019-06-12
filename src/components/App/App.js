import React from 'react'
import { Route, Switch } from 'react-router-dom'
import NavBar from '../NavBar/NavBar'
import LandingPage from '../../routes/LandingPage/LandingPage'
import RegistrationPage from '../../routes/RegistrationPage/RegistrationPage'

import './App.scss';

function App() {
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
          {/* <Route path={'/home/:homeId'} component={HomePage} />
          <Route component={NotFoundPage} /> */}
        </Switch>
      </main>

    </div>
  );
}

export default App;
