import React from 'react';
import { shallow } from 'enzyme';
import UserStats from './UserStats';
import { library } from '@fortawesome/fontawesome-svg-core';
import 'jest-canvas-mock';

import {
  faDoorOpen, faPlusCircle, faPlus, faTimes
} from '@fortawesome/free-solid-svg-icons'

library.add(
  faDoorOpen, // logo
  faPlusCircle,
  faPlus,
  faTimes
)

describe(`UserStats Component`, () => {

  it('should render correctly with no props', () => {
    const component = shallow(<UserStats />);

    expect(component).toMatchSnapshot();
  });

  //write test that only calls createAvailabilityChart function using jest

})