import React from 'react';
import {shallow, mount} from 'enzyme';

import {PostForm} from './postform';
const dummyFunction = () =>{}
describe('<PostForm />', () => {
  it('Renders without crashing', () => {
    shallow(<PostForm handleSubmit={dummyFunction}/>);
  });
});