import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import renderer from 'react-test-renderer';
import RegistrationForm from './RegistrationForm';

describe(`RegistrationForm Component`, () => {

  it('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <RegistrationForm />
      </BrowserRouter>
      , div);
    ReactDOM.unmountComponentAtNode(div);
  })

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <RegistrationForm />
        </BrowserRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

})