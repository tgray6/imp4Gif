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
    	error: null
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
			state = authReducer(state, setAuthToken());
			expect(state).toEqual({
				authToken: undefined
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
		it('Should set loading to true and error to be null', () => {
			let state = {
				loading: false,
				error: "ValidationError"
			}
			state = authReducer(state, authRequest());
			expect(state).toEqual({
				loading: true,
				error: null
			});
		})
	})

	describe('authSuccess', () => {
		it('Should set loading to false and currentUser to be undefined', () => {
			let state = {
				loading: true,
				currentUser: null
			}
			state = authReducer(state, authSuccess());
			expect(state).toEqual({
				loading: false,
				currentUser: undefined
			});
		})
	})

	describe('authError', () => {
		it('Should set loading to false and error to be undefined', () => {
			let state = {
				loading: true,
				error: null
			}
			state = authReducer(state, authError());
			expect(state).toEqual({
				loading: false,
				error: undefined
			});
		})
	})

})