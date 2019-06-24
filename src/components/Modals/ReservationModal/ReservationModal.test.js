import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ReservationModal from './ReservationModal';
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

describe('ReservationModal route component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <ReservationModal />
      , div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(
        <ReservationModal />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
})