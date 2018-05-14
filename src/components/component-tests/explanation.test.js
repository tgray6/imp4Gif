import React from 'react';
import {shallow, mount} from 'enzyme';

import Explanation from '../landingpage/explanation';

describe ('<Explanation />', () => {
	it('renders without crashing', () => {
		shallow(<Explanation />);
	});
})