import React from 'react';
import {shallow, mount} from 'enzyme';

import {LoginForm} from './loginform';
const dummyFunction = () =>{}
describe('<LoginForm />', () => {
  it('Renders without crashing', () => {
    shallow(<LoginForm handleSubmit={dummyFunction} />);
  });
});