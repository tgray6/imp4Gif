// import {API_BASE_URL} from '../config';

// export const API_BASE_URL =
//     process.env.REACT_APP_API_BASE_URL || 'https://thawing-mountain-68022.herokuapp.com';

// export const TOGGLEFORM = 'TOGGLEFORM';
// export const togglePostForm = () => ({
//     type: TOGGLEFORM
// });

export const TOGGLEREGISTERFORM = 'TOGGLEREGISTERFORM';
export const toggleRegisterForm = () => ({
    type: TOGGLEREGISTERFORM
});

export const TOGGLELOGINFORM = 'TOGGLELOGINFORM';
export const toggleLoginForm = () => ({
    type: TOGGLELOGINFORM
});

//just used to change the nickName value at this point
// export const LOGINUSER = 'LOGINUSER';
// export const loginUser = () => ({
//     type: LOGINUSER
// });

// export const LOGOUTUSER = 'LOGOUTUSER';
// export const logoutUser = () => ({
//     type: LOGOUTUSER
// });

export const LOADING = 'LOADING';
export const loading = () => ({
    type: LOADING
});

// export const GOHOME = 'GOHOME';
// export const goHome = () => ({
//     type: GOHOME
// });


// export const ADD_POST = "ADD_POST";
// export const addPost = data => ({
// 	type: ADD_POST,
// 	data
// });

// export const DELETE_POST = "DELETE_POST";
// export const deletePost = id => ({
// 	type: DELETE_POST,
// 	id
// });

export const INDIVIDUAL_RENDER = "INDIVIDUAL_RENDER";
export const renderPost = id => ({
	type: INDIVIDUAL_RENDER,
	id
});

// export const ADD_COMMENT = "ADD_COMMENT";
// export const addComment = (comment, id )=> ({
// 	type: ADD_COMMENT,
// 	id,
// 	comment
// });


// export const UPDATE_ITEM = "UPDATE_ITEM";
// export const updateItem = item => ({
// 	type: UPDATE_ITEM,
// 	item
// });



//GET POSTS FROM API
// export const FETCH_ITEMS_SUCCESS = 'FETCH_ITEMS_SUCCESS';
// export const fetchItemsSuccess = items => ({
//     type: FETCH_ITEMS_SUCCESS,
//     items:items
// });


// export const fetchItems = () => dispatch => {
//     fetch(`${API_BASE_URL}/items`)
//         .then(res => {
//             if (!res.ok) {
//                 return Promise.reject(res.statusText);
//             }
//             return res.json();
//         })
//         .then(response => {
//             dispatch(fetchItemsSuccess(response.items));
//         });
// };



