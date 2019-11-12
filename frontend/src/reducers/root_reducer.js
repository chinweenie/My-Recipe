
import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import uiReducer from './ui_reducer';

const RootReducer = combineReducers({
    session: sessionReducer,
    UI: uiReducer
    
});

export default RootReducer;