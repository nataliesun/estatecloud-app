import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import RegistrationPage from './RegistrationPage';


describe('RegistrationPage route component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<RegistrationPage />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<RegistrationPage />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
})

