export const TOGGLEFORM = 'TOGGLEFORM';
export const togglePostForm = () => ({
    type: TOGGLEFORM
});


export const ADD_POST = "ADD_POST";
export const addPost = data => ({
	type: ADD_POST,
	data
});

export const DELETE_POST = "DELETE_POST";
export const deletePost = id => ({
	type: DELETE_POST,
	id
});

export const INDIVIDUAL_RENDER = "INDIVIDUAL_RENDER";
export const renderPost = id => ({
	type: INDIVIDUAL_RENDER,
	id
});