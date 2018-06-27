import React from 'react';
import {shallow, mount} from 'enzyme';
import {CommentForm} from './commentform';

describe('<CommentForm />', () => {
    it('Renders without crashing', () => {
        shallow(<CommentForm />);
    });

});