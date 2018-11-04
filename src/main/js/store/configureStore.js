import {
    createStore, combineReducers, applyMiddleware, compose,
} from 'redux';
import thunk from 'redux-thunk';
import groupsReducer from 'reducers/groups';
import matchesReducer from 'reducers/matches';
import playersReducer from 'reducers/players';
import authReducer from 'reducers/auth';

// eslint-disable-next-line
const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const appReducer = combineReducers({
        groups: groupsReducer,
        matches: matchesReducer,
        players: playersReducer,
        auth: authReducer,
    });
    const rootReducer = (state, action) => {
        if (action.type === 'LOGOUT') {
            state = undefined; // eslint-disable-line
        }
        return appReducer(state, action);
    };
    const store = createStore(rootReducer,
        composeEnchancers(applyMiddleware(thunk)));

    return store;
};
