import {
	LOADING,
	loading,
	TOGGLEREGISTERFORM,
	toggleRegisterForm,
	TOGGLELOGINFORM,
	toggleLoginForm
} from '../actions/actions';


describe('loading', () => {
    it('Should return the action', () => {
        const action = loading();
        expect(action.type).toEqual(LOADING);
    });
});


describe('toggleRegisterForm', () => {
    it('Should return the action', () => {
        const action = toggleRegisterForm();
        expect(action.type).toEqual(TOGGLEREGISTERFORM);
    });
});


describe('toggleLoginForm', () => {
    it('Should return the action', () => {
        const action = toggleLoginForm();
        expect(action.type).toEqual(TOGGLELOGINFORM);
    });
});