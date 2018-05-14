import React from 'react';
import {shallow, mount} from 'enzyme';

import CommentForm from '../postpage/commentform';

describe ('<CommentForm />', () => {
	it('renders without crashing', () => {
		shallow(<CommentForm />);
	});
})