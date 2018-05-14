import React from 'react';
import {shallow, mount} from 'enzyme';

import NavBar from '../homepage/navbar';

describe ('<NavBar />', () => {
	it('renders without crashing', () => {
		shallow(<NavBar />);
	});
})