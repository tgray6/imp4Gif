import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './errornormalize';


//This updates our client state to show the users recent post(s)
export const ADD_POST = "ADD_POST";
export const addPost = data => ({
    type: ADD_POST,
    data
});


//Used to toggle a boolean to true or false, showing and hiding the Post Form on click of the Post button and Close Button(after you clicked Post Button)
export const TOGGLEFORM = 'TOGGLEFORM';
export const togglePostForm = () => ({
    type: TOGGLEFORM
});


//Used to set the visibility of the Link Instructions, when you click the Post Button, then Link Guide button
export const TOGGLEMODAL = 'TOGGLEMODAL';
export const toggleModal = () => ({
    type: TOGGLEMODAL
});


//Used same as the above, but just sets it to false. This ensures that if you close the post form a different way, the link instructions section also closes.
export const TOGGLEMODALOFF = 'TOGGLEMODALOFF';
export const toggleModalOff = () => ({
    type: TOGGLEMODALOFF
});


//Used on our PUT dispatch on the comment form. This is to update the currently displayed post with the users comment. 
export const UPDATE_ITEM = "UPDATE_ITEM";
export const updateItem = item => ({
    type: UPDATE_ITEM,
    item
});


//This is to run before our fetch so we can display the loading icon.
export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const fetchDataRequest = () => ({
    type: FETCH_DATA_REQUEST
});



//All below is used for fetching the protected GET data endpoint and returning the data or errors.
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
    //Gets the authtoken from authReducer at state.auth.authToken(auth is set in store.js to point to authReducer)
    const authToken = getState().auth.authToken;
    dispatch(fetchDataRequest())
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