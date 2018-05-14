import React from 'react';
import {shallow, mount} from 'enzyme';

import HomePage from '../homepage/homepage';

describe ('<HomePage />', () => {
	it('renders without crashing', () => {
		shallow(<HomePage />);
	});
})