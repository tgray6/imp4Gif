export const TOGGLEFORM = 'TOGGLEFORM';
export const togglePostForm = () => ({
    type: TOGGLEFORM
});


export const ADD_POST = "ADD_POST";
export const addPost = data => ({
	type: ADD_POST,
	data
});