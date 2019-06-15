import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import './index.css';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
import { PropertyProvider } from './contexts/PropertyContext';

import {
  faDoorOpen
} from '@fortawesome/free-solid-svg-icons'

library.add(
  faDoorOpen, // logo
)

ReactDOM.render(
  <PropertyProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </PropertyProvider>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
