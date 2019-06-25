import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import renderer from 'react-test-renderer';
import Schedule from './Schedule';
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

describe(`Schedule Component`, () => {

  it('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <Schedule />
      </BrowserRouter>
      , div);
    ReactDOM.unmountComponentAtNode(div);
  })

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <Schedule />
        </BrowserRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

})