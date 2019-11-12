// Although there's only one function here so far, let's import the whole file since we will be adding more later
import * as APIUtil from '../util/session_api_util';
import jwt_decode from 'jwt-decode';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_USER_LOGOUT = 'RECEIVE_USER_LOGOUT';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';


// This pattern should be familiar to you from the full stack project
export const receiveCurrentUser = (currentUser) => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});


export const logoutUser = () => ({
    type: RECEIVE_USER_LOGOUT
});

export const recieveSessionErrors = (errors) => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

export const signup = user => dispatch => (
    APIUtil.signup(user).then(response => {
        const { token } = response.data;
        localStorage.setItem('jwtToken', token);
        APIUtil.setAuthToken(token);
        const decoded = jwt_decode(token);
        dispatch(receiveCurrentUser(decoded));
    }, error => {
        return dispatch(recieveSessionErrors(error.response.data));
    })
);

export const login = (user) => dispatch => (
    APIUtil.login(user).then(response => {
        const { token } = response.data;
        localStorage.setItem('jwtToken', token);
        APIUtil.setAuthToken(token);
        const decoded = jwt_decode(token);
        dispatch(receiveCurrentUser(decoded));
    }, error => {
        return dispatch(recieveSessionErrors(error.response.data))
    })
)

export const logout = () => dispatch => {
    // Remove the token from local storage
    localStorage.removeItem('jwtToken')
    // Remove the token from the common axios header
    APIUtil.setAuthToken(false)
    // Dispatch a logout action
    dispatch(logoutUser());
    window.location.href = '/';
};