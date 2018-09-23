import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import groupsReducer from 'reducers/groups';
import gamesReducer from 'reducers/games';
import playersReducer from 'reducers/players'
import thunk from 'redux-thunk';

const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      groups: groupsReducer,
      games : gamesReducer,
      players : playersReducer
    }),
    composeEnchancers(applyMiddleware(thunk))
  );

  return store;
};
