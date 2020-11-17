import { createStore, combineReducers } from 'redux';
import todos from './rootReducer';

const rootReducer = combineReducers({
  todos,
});

const store = createStore(rootReducer);

export default store;
