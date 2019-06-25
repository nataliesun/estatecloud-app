import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import renderer from 'react-test-renderer';
import PropertyListItem from './PropertyListItem';

describe(`PropertyListItem Component`, () => {

  it('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <PropertyListItem />
      </BrowserRouter>
      , div);
    ReactDOM.unmountComponentAtNode(div);
  })

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <PropertyListItem />
        </BrowserRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

})