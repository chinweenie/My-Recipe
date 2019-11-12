import { RECEIVE_USER_LOGOUT, RECEIVE_CURRENT_USER } from '../actions/session_actions';

const _nullUser = Object.freeze({
    currentUser: null
})

const sessionReducer = (state = _nullUser, action) => {
    switch (action.type) {
        case RECEIVE_USER_LOGOUT:
            return {
                isAuthenticated: false,
                user: undefined
            };

        case RECEIVE_CURRENT_USER:
            return { currentUser: action.currentuser};
        default:
            return state;
    }
};

export default sessionReducer;