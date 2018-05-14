import React from 'react';
import {shallow, mount} from 'enzyme';

import PostForm from '../postmodalform/postform';

describe ('<PostForm />', () => {
	it('renders without crashing', () => {
		shallow(<PostForm />);
	});
})