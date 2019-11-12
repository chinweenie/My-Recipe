import { RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER, RECEIVE_USER_LOGOUT } from '../actions/session_actions';

const sessionErrorsReducer = (state = [], action) => {
    switch (action.type) {
        case RECEIVE_SESSION_ERRORS:
            return action.errors;

        case RECEIVE_CURRENT_USER:
            return [];

        case RECEIVE_USER_LOGOUT:
            return [];

        default:
            return [];
    }
}

export default sessionErrorsReducer;