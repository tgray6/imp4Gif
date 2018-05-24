import React from 'react';
import {shallow, mount} from 'enzyme';

import ItemToDisplay from '../postpage/itemtodisplay';

describe ('<ItemToDisplay />', () => {
	it('renders without crashing', () => {
		shallow(<ItemToDisplay />);
	});
})