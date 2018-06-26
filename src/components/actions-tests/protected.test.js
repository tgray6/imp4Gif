import {
    FETCH_PROTECTED_DATA_SUCCESS,
    fetchProtectedDataSuccess,
    FETCH_PROTECTED_DATA_ERROR,
    fetchProtectedDataError,
    ADD_POST,
    addPost,
    TOGGLEFORM,
    togglePostForm,
    UPDATE_ITEM,
    updateItem,
    TOGGLEMODAL,
    toggleModal,
    TOGGLEMODALOFF,
    toggleModalOff
} from '../actions/protected';


describe('fetchProtectedDataSuccess', () => {
	it('Should return the action', () => {
		const action = fetchProtectedDataSuccess();
		expect(action.type).toEqual(FETCH_PROTECTED_DATA_SUCCESS);
	});
});


describe('fetchProtectedDataError', () => {
	it('Should return the action', () => {
		const action = fetchProtectedDataError();
		expect(action.type).toEqual(FETCH_PROTECTED_DATA_ERROR);
	});
});


describe('addPost', () => {
	it('Should return the action', () => {
		const action = addPost();
		expect(action.type).toEqual(ADD_POST);
	});
});


describe('togglePostForm', () => {
	it('Should return the action', () => {
		const action = togglePostForm();
		expect(action.type).toEqual(TOGGLEFORM);
	});
});


describe('updateItem', () => {
	it('Should return the action', () => {
		const action = updateItem();
		expect(action.type).toEqual(UPDATE_ITEM);
	});
});


describe('toggleModal', () => {
	it('Should return the action', () => {
		const action = toggleModal();
		expect(action.type).toEqual(TOGGLEMODAL);
	});
});


describe('toggleModalOff', () => {
	it('Should return the action', () => {
		const action = toggleModalOff();
		expect(action.type).toEqual(TOGGLEMODALOFF);
	});
});