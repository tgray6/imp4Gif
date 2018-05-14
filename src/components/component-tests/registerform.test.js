import React from 'react';
import {shallow, mount} from 'enzyme';

import RegisterForm from '../landingpage/registerform';

describe ('<RegisterForm />', () => {
	it('renders without crashing', () => {
		shallow(<RegisterForm />);
	});
})