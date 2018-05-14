import React from 'react';
import {shallow, mount} from 'enzyme';

import FlexImage from '../homepage/fleximage';

describe ('<FlexImage />', () => {
	it('renders without crashing', () => {
		shallow(<FlexImage />);
	});
})