export const TOGGLEREGISTERFORM = 'TOGGLEREGISTERFORM';
export const toggleRegisterForm = () => ({
    type: TOGGLEREGISTERFORM
});


export const TOGGLELOGINFORM = 'TOGGLELOGINFORM';
export const toggleLoginForm = () => ({
    type: TOGGLELOGINFORM
});


export const LOADING = 'LOADING';
export const loading = () => ({
    type: LOADING
});


export const INDIVIDUAL_RENDER = "INDIVIDUAL_RENDER";
export const renderPost = id => ({
	type: INDIVIDUAL_RENDER,
	id
});