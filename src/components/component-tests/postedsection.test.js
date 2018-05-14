import React from 'react';
import {shallow, mount} from 'enzyme';

import PostedSection from '../homepage/postedsection';

describe ('<PostedSection />', () => {
	it('renders without crashing', () => {
		shallow(<PostedSection />);
	});
})