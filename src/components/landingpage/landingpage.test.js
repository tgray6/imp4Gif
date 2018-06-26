import React from 'react';
import {shallow, mount} from 'enzyme';
import {LandingPage} from './landingpage';

describe('<LandingPage />', () => {
  it('Renders without crashing', () => {
    shallow(<LandingPage />);
  });

  it('Should call toggleRegisterForm when Register button is clicked', () => {
  	const dispatch = jest.fn();
  	const wrapper = shallow(<LandingPage dispatch={dispatch}/>);
  	const link = wrapper.find('.registerFormButton');
  	link.simulate('click', {
  		preventDefault() {}
  	});
  	expect(dispatch).toHaveBeenCalled();
  })

  it('Should call toggleLoginFormForm when Login button is clicked', () => {
  	const dispatch = jest.fn();
  	const wrapper = shallow(<LandingPage dispatch={dispatch}/>);
  	const link = wrapper.find('.loginFormButton');
  	link.simulate('click', {
  		preventDefault() {}
  	});
  	expect(dispatch).toHaveBeenCalled();
  })
});