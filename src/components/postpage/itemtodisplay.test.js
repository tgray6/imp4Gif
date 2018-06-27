import React from 'react';
import {shallow, mount} from 'enzyme';

import {ItemToDisplay} from './itemtodisplay';
const dummyFunction = () => {}
describe('<ItemToDisplay />', () => {
  it('Renders without crashing', () => {
    shallow(<ItemToDisplay dispatch={dummyFunction} />);
  });
});