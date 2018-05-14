import React from 'react';
import {shallow, mount} from 'enzyme';

import PostPage from '../postpage/postpage';

describe ('<PostPage />', () => {
	it('renders without crashing', () => {
		shallow(<PostPage />);
	});
})