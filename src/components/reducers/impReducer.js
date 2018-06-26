import {LOADING} from '../actions/actions';
import {TOGGLEREGISTERFORM} from '../actions/actions';
import {TOGGLELOGINFORM} from '../actions/actions';

const initialState = {
	showRegisterForm: false,
	showLoginForm: false,
	loading: false,
}

export function impReducer (state=initialState, action) {

	if(action.type === TOGGLEREGISTERFORM) {
		if(state.showRegisterForm===false){
			return Object.assign({}, state, {
				showRegisterForm: true
			});
		}
		else if(state.showRegisterForm===true){
			return Object.assign({}, state, {
				showRegisterForm: false
			});			
		}

	}

	if(action.type === TOGGLELOGINFORM) {
		if(state.showLoginForm===false){
			return Object.assign({}, state, {
				showLoginForm: true
			});
		}
		else if(state.showLoginForm===true){
			return Object.assign({}, state, {
				showLoginForm: false
			});			
		}

	}

	if(action.type === LOADING) {
		if(state.loading===false){
			return Object.assign({}, state, {
				loading: true
			});
		}
		else if(state.loading===true){
			return Object.assign({}, state, {
				loading: false
			});			
		}
	}

	return state;
}