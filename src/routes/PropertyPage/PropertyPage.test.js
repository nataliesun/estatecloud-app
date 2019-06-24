import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import PropertyPage from './PropertyPage';
import { BrowserRouter } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'

import {
  faDoorOpen, faPlusCircle, faPlus, faTimes
} from '@fortawesome/free-solid-svg-icons'

library.add(
  faDoorOpen, // logo
  faPlusCircle,
  faPlus,
  faTimes
)

describe('PropertyPage route component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <PropertyPage />
      </BrowserRouter>
      , div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<BrowserRouter>
        <PropertyPage />
      </BrowserRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
})

