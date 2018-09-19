import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addGroup } from './actions/groups';

const store = configureStore();

//TODO apagar teste
store.dispatch(addGroup({
    id: 'aaaa-bbbb', 
    name: 'Liga 1', 
    games: [{ id: 1, location: 'paula ramos', numPlayers: 12 }],
    players: [{ id: '1', name: 'Alisson' }, {id: '2', name: 'Teste' }]
}));

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
