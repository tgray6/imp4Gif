import React from 'react';
import {shallow, mount} from 'enzyme';

import {LoadingComponent} from './loadingcomponent';

describe('<LoadingComponent />', () => {
  it('Renders without crashing', () => {
    shallow(<LoadingComponent />);
  });
});