import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import groupsReducer from 'reducers/groups';
import gamesReducer from 'reducers/games';
import playersReducer from 'reducers/players'
import authReducer from 'reducers/auth';

const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            groups: groupsReducer,
            games: gamesReducer,
            players: playersReducer,
            auth: authReducer
        }),
        composeEnchancers(applyMiddleware(thunk))
    );

    return store;
};
