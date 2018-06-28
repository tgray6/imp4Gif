//action to show registerform on click of Register button on login screen
export const TOGGLEREGISTERFORM = 'TOGGLEREGISTERFORM';
export const toggleRegisterForm = () => ({
    type: TOGGLEREGISTERFORM
});


//action to show loginform on click of Login button on login screen
export const TOGGLELOGINFORM = 'TOGGLELOGINFORM';
export const toggleLoginForm = () => ({
    type: TOGGLELOGINFORM
});


//action to toggle both forms back to off on click of Logout button in the navbar
export const TOGGLEFORMSOFF = 'TOGGLEFORMSOFF';
export const toggleFormsOff = () => ({
    type: TOGGLEFORMSOFF
});


//this is to determine if loading is true or not, primarily used only for style points on click of the delete button when deleting your post
export const LOADING = 'LOADING';
export const loading = () => ({
    type: LOADING
});