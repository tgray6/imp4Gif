import React from 'react';
import {shallow, mount} from 'enzyme';

import {PostedSection} from './postedsection';

const dummyFunction = () => {}
 	let items = [
 		{
 			title: "Test Title",
 			type: "image",
 			youTubeUrl: "https://i.gifer.com/NM9x.gif",
 			url: "https://i.gifer.com/NM9x.gif",
 			author: "New Author",
 			comments: []
 		}
 	]

describe('<PostedSection />', () => {
  it('Renders without crashing', () => {
    shallow(<PostedSection dispatch={dummyFunction} items={items}/>);
  });
});