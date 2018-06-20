import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './errornormalize';

export const ADD_POST = "ADD_POST";
export const addPost = data => ({
    type: ADD_POST,
    data
});


export const TOGGLEFORM = 'TOGGLEFORM';
export const togglePostForm = () => ({
    type: TOGGLEFORM
});

export const TOGGLEMODAL = 'TOGGLEMODAL';
export const toggleModal = () => ({
    type: TOGGLEMODAL
});

export const TOGGLEMODALOFF = 'TOGGLEMODALOFF';
export const toggleModalOff = () => ({
    type: TOGGLEMODALOFF
});


export const UPDATE_ITEM = "UPDATE_ITEM";
export const updateItem = item => ({
    type: UPDATE_ITEM,
    item
});



export const FETCH_PROTECTED_DATA_SUCCESS = 'FETCH_PROTECTED_DATA_SUCCESS';
export const fetchProtectedDataSuccess = data => ({
    type: FETCH_PROTECTED_DATA_SUCCESS,
    data
});

export const FETCH_PROTECTED_DATA_ERROR = 'FETCH_PROTECTED_DATA_ERROR';
export const fetchProtectedDataError = error => ({
    type: FETCH_PROTECTED_DATA_ERROR,
    error
});

export const fetchProtectedData = () => (dispatch, getState) => {
    console.log("fetchProtectedData is running, we get successful GET in logs");
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/items`, {
        method: 'GET',
        headers: {
            // Provide our auth token as credentials
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        
        .then(res => {
            return res.json();
        })

        .then(res => {
            dispatch(fetchProtectedDataSuccess(res.items))
        })

        .catch(err => {
            dispatch(fetchProtectedDataError(err))
        });
};