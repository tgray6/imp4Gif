import React from 'react';
import {shallow, mount} from 'enzyme';

import FlexVideo from '../homepage/flexvideo';

describe ('<FlexVideo />', () => {
	it('renders without crashing', () => {
		shallow(<FlexVideo />);
	});
})