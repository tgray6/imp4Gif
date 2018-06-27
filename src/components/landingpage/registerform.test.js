import React from 'react';
import {shallow, mount} from 'enzyme';

import {RegisterForm} from './registerform';
const dummyFunction = () =>{}
describe('<RegisterForm />', () => {
  it('Renders without crashing', () => {
    shallow(<RegisterForm handleSubmit={dummyFunction} />);
  });
});