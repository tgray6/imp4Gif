import {
    SET_AUTH_TOKEN,
    setAuthToken,
    CLEAR_AUTH,
    clearAuth,
    AUTH_REQUEST,
    authRequest,
    AUTH_SUCCESS,
    authSuccess,
    AUTH_ERROR,
    authError
} from '../actions/auth';


describe('setAuthToken', () => {
    it('Should return the action', () => {
        const action = setAuthToken();
        expect(action.type).toEqual(SET_AUTH_TOKEN);
    });
});


describe('clearAuth', () => {
    it('Should return the action', () => {
        const action = clearAuth();
        expect(action.type).toEqual(CLEAR_AUTH);
    });
});


describe('authRequest', () => {
    it('Should return the action', () => {
        const action = authRequest();
        expect(action.type).toEqual(AUTH_REQUEST);
    });
});


describe('authSuccess', () => {
    it('Should return the action', () => {
        const action = authSuccess();
        expect(action.type).toEqual(AUTH_SUCCESS);
    });
});


describe('authError', () => {
    it('Should return the action', () => {
        const action = authError();
        expect(action.type).toEqual(AUTH_ERROR);
    });
});