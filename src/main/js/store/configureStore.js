import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import groupsReducer from 'reducers/groups';
import thunk from 'redux-thunk';

const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      groups: groupsReducer
    }),
    composeEnchancers(applyMiddleware(thunk))
  );

  return store;
};
