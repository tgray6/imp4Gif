import React from 'react';
import {shallow, mount} from 'enzyme';

import CommentSection from '../postpage/commentsection';

describe ('<CommentSection />', () => {
	it('renders without crashing', () => {
		shallow(<CommentSection />);
	});
})