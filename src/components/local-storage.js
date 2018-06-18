export const loadAuthToken = () => {
    return localStorage.getItem('authToken');
};

export const saveAuthToken = authToken => {
    try {
        localStorage.setItem('authToken', authToken);
    } catch (e) {}
};

export const clearAuthToken = () => {
    try {
        localStorage.removeItem('authToken');
    } catch (e) {}
};







//TESTING SET GET INFO TO LOCAL STORAGE$@#$@#$@#$

export const loadGetInfo = () => {
    return localStorage.getItem('data');
};

export const saveGetInfo = data => {
    try {
        localStorage.setItem('data', data);
    } catch (e) {}
};

//@#$@#$@#$@#$#@$#@$@#$@#$@#$#$@#$#@$@#$#@$@#$@#$@