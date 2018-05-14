import React from 'react';
import {shallow, mount} from 'enzyme';

import Comments from '../postpage/comments';

describe ('<Comments />', () => {
	it('renders without crashing', () => {
		shallow(<Comments />);
	});
})