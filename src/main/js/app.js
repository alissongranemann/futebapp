import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetGroups } from './actions/groups';
import { login, logout } from './actions/auth'
import { firebase } from 'service/firebase';
import LoadingPage from './components/LoadingPage';
import 'styles.scss';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';

const store = configureStore();

const theme = createMuiTheme({
    typography: {
        htmlFontSize: 10,
        useNextVariants: true,
        h5: {
            fontWeight: 700
        }
    },
    palette: {
        primary: green
    }
});

const jsx = (
    <MuiThemeProvider theme={theme}>
        <Provider store={store}>
            <AppRouter />
        </Provider>
    </MuiThemeProvider>
);
let hasRendered = false;
const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true;
    }
}

ReactDOM.render(<LoadingPage />, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        store.dispatch(login(user.uid));
        store.dispatch(startSetGroups()).then(() => {
            renderApp();
            if (history.location.pathname === '/') {
                history.push('/dashboard');
            }
        })
    } else {
        store.dispatch(logout());
        renderApp();
        history.push('/');
    }
});
