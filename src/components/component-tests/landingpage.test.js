import React from 'react';
import {shallow, mount} from 'enzyme';

import LandingPage from '../landingpage/landingpage';

describe ('<LandingPage />', () => {
	it('renders without crashing', () => {
		shallow(<LandingPage />);
	});
})