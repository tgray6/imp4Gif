import React from 'react';
import {shallow, mount} from 'enzyme';

import Explanation from './explanationtwo';

describe('<Explanation />', () => {
  it('Renders without crashing', () => {
    shallow(<Explanation />);
  });
});