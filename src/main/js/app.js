import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetGroups } from './actions/groups';
import { startSetGames } from './actions/games';
import { startSetPlayers } from './actions/players';
import 'firebase/firebase'

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

store.dispatch(startSetGroups()).then(() => {
  store.dispatch(startSetGames());
  store.dispatch(startSetPlayers());
  ReactDOM.render(jsx, document.getElementById('app'));
});
