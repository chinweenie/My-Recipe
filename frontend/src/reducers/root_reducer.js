
import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import uiReducer from './ui_reducer';
import errorReducer from './error_reducer';

const RootReducer = combineReducers({
    session: sessionReducer,
    UI: uiReducer,
    errors: errorReducer
});

export default RootReducer;