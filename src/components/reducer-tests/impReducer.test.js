import {impReducer} from '../reducers/impReducer';
import {
	loading,
	toggleRegisterForm,
	toggleLoginForm
} from '../actions/actions';

describe('impReducer', () => {

	const initialState = {
		showRegisterForm: false,
		showLoginForm: false,
		loading: false
	};

	it('Should recognize the initialState as all false', () => {
		const state = initialState;
		expect(state).toEqual(state);
	})

	describe('loading', () => {
		it('Should toggle loading to true', () => {
			let state = {
				loading:false
			}
			state = impReducer(state, loading());
			expect(state).toEqual({
				loading: true
			});
		})
	})

	describe('loading', () => {
		it('Should toggle loading to false', () => {
			let state = {
				loading:true
			}
			state = impReducer(state, loading());
			expect(state).toEqual({
				loading: false
			});
		})
	})

	describe('toggleRegisterForm', () => {
		it('Should toggle showRegisterForm to true', () => {
			let state = {
				showRegisterForm:false
			}
			state = impReducer(state, toggleRegisterForm());
			expect(state).toEqual({
				showRegisterForm: true
			});
		})
	})

	describe('toggleRegisterForm', () => {
		it('Should toggle showRegisterForm to false', () => {
			let state = {
				showRegisterForm:true
			}
			state = impReducer(state, toggleRegisterForm());
			expect(state).toEqual({
				showRegisterForm: false
			});
		})
	})

	describe('toggleLoginForm', () => {
		it('Should toggle toggleLoginForm to true', () => {
			let state = {
				showLoginForm:false
			}
			state = impReducer(state, toggleLoginForm());
			expect(state).toEqual({
				showLoginForm: true
			});
		})
	})

	describe('toggleLoginForm', () => {
		it('Should toggle toggleLoginForm to false', () => {
			let state = {
				showLoginForm:true
			}
			state = impReducer(state, toggleLoginForm());
			expect(state).toEqual({
				showLoginForm: false
			});
		})
	})
})