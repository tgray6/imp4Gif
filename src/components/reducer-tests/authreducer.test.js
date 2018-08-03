import {authReducer} from '../reducers/authreducer';

import {
    setAuthToken,
    clearAuth,
    authRequest,
    authSuccess,
    authError
} from '../actions/auth';

describe('authReducer', () => {
	const initialState = {
    	authToken: null, // authToken !== null does not mean it has been validated
    	currentUser: null,
    	loading: false,
    	error: null,
    	loginLoading: false
	};

	it('Should recognize the initialState', () => {
		const state = initialState;
		expect(state).toEqual(state);
	});

	describe('setAuthToken', () => {
		it('Should set authToken to not be null', () => {
			let state = {
				authToken: null
			}
			state = authReducer(state, setAuthToken("dummyvalue"));
			expect(state).toEqual({
				authToken: "dummyvalue"
			});
		})
	})

	describe('clearAuth', () => {
		it('Should set authToken and currentUser to be null', () => {
			let state = {
				authToken: "12123b2k3b1n23b12",
				currentUser: "TestUser"
			}
			state = authReducer(state, clearAuth());
			expect(state).toEqual({
				authToken: null,
				currentUser: null
			});
		})
	})

	describe('authRequest', () => {
		it('Should set loading to true, error to null, and loginLoading to true', () => {
			let state = {
				loginLoading: false,
				loading: false,
				error: "ValidationError"
			}
			state = authReducer(state, authRequest());
			expect(state).toEqual({
				loginLoading: true,
				loading: true,
				error: null
			});
		})
	})

	describe('authSuccess', () => {
		it('Should set loading to false and currentUser to be undefined, loginLoading to be false', () => {
			let state = {
				loginLoading: true,
				loading: true,
				currentUser: null
			}
			state = authReducer(state, authSuccess("dummyvalue"));
			expect(state).toEqual({
				loginLoading: false,
				loading: false,
				currentUser: "dummyvalue"
			});
		})
	})

	describe('authError', () => {
		it('Should set loading to false and error to be undefined, loginLoading to be false', () => {
			let state = {
				loginLoading: true,
				loading: true,
				error: null
			}
			state = authReducer(state, authError("ValidationError"));
			expect(state).toEqual({
				loginLoading: false,
				loading: false,
				error: "ValidationError"
			});
		})
	})

})