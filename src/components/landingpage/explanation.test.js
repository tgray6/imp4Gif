import React from 'react';
import {shallow, mount} from 'enzyme';

import Explanation from './explanation';

describe('<Explanation />', () => {
	it('Renders without crashing', () => {
		shallow(<Explanation />);
	});
});