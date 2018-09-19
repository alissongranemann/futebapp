import { createStore, combineReducers } from 'redux';
import groupsReducer from 'reducers/groups';

export default () => {
  const store = createStore(
    combineReducers({
      groups: groupsReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};
