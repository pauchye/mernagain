import { combineReducers } from 'redux';
import session from './session_reducer';
import dreams from './dreams_reducer';
import errors from './errors_reducer';

const RootReducer = combineReducers({
    session,
    dreams,
    errors
});

export default RootReducer;