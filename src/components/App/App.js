import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Particles from 'react-particles-js';
import NavBar from '../NavBar/NavBar'
import LandingPage from '../../routes/LandingPage/LandingPage'
import RegistrationPage from '../../routes/RegistrationPage/RegistrationPage'
import Dashboard from '../../routes/Dashboard/Dashboard'
import NewPropertyPage from '../../routes/NewPropertyPage/NewPropertyPage'
import LoginPage from '../../routes/LoginPage/LoginPage'
import PropertyPage from '../../routes/PropertyPage/PropertyPage'
import PrivateRoute from '../Utils/PrivateRoute';
import PublicOnlyRoute from '../Utils/PublicOnlyRoute';
import NotFoundPage from '../../routes/NotFoundPage/NotFoundPage';


import './App.scss';
import EditPropertyPage from '../../routes/EditPropertyPage/EditPropertyPage';
import FriendsPage from '../../routes/FriendsPage/FriendsPage';
import FriendsPropertyPage from '../../routes/FriendsPropertyPage/FriendsPropertyPage';

class App extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    console.error(error);
    return { hasError: true };
  }

  render() {

    return (
      <div className="App">
        <header className="App__header">
          <NavBar />
        </header>

        <Particles canvasClassName="particles"
          params={{
            "interactivity": {
              "events": {
                "onhover": {
                  "enable": true,
                  "mode": "repulse"
                }
              }
            }
          }
          } />


        <main className="App__main">
          {this.state.hasError && (
            <p className="red">There was an error! Oh no!</p>
          )}

          <Switch>
            <PublicOnlyRoute exact path={'/'} component={LandingPage} />
            <PublicOnlyRoute path={'/login'} component={LoginPage} />
            <PublicOnlyRoute path={'/register'} component={RegistrationPage} />
            <PrivateRoute path={'/dashboard'} component={Dashboard} />
            <PrivateRoute exact path={'/friends/'} component={FriendsPage} />
            <PrivateRoute path={'/friends/:property_id'} component={FriendsPropertyPage} />
            <PrivateRoute path={'/addProperty'} component={NewPropertyPage} />
            <PrivateRoute path={'/property/:property_id'} component={PropertyPage} />
            <PrivateRoute path={'/editProperty/:property_id'} component={EditPropertyPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </main>


      </div>
    );
  }


}

export default App;
