import React from 'react';
import {shallow, mount} from 'enzyme';
import {NavBar} from './navbar';

describe('<NavBar />', () => {
  	it('Renders without crashing', () => {
    	shallow(<NavBar />);
  	});

  	it('Should call togglePostForm when Post button is clicked', () => {
  		const dispatch = jest.fn();
  		const wrapper = shallow(<NavBar dispatch={dispatch}/>);
  		const link = wrapper.find('.post');
  		link.simulate('click', {
  			preventDefault() {}
  		});
  		expect(dispatch).toHaveBeenCalled();
  	})

  	it('Should dispatch when Logout button is clicked', () => {
  		const dispatch = jest.fn();
  		const wrapper = shallow(<NavBar dispatch={dispatch}/>);
  		const link = wrapper.find('.logoutUser');
  		link.simulate('click', {
  			preventDefault() {}
  		});
  		expect(dispatch).toHaveBeenCalled();
  	})
});