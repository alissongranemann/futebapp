import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import createBrowserHistory from 'history/createBrowserHistory';
import CssBaseline from '@material-ui/core/CssBaseline';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

function Loading({ error }) {
    if (error) {
        return 'Oh nooess!';
    }
    return <h3>Loading...</h3>;
}

const GroupDashboardPage = Loadable({
    loader: () => import('../components/GroupDashboardPage'),
    loading: Loading,
});

const ViewGroupPage = Loadable({
    loader: () => import('../components/group/ViewGroupPage'),
    loading: Loading,
});

const AddGroupPage = Loadable({
    loader: () => import('../components/group/AddGroupPage'),
    loading: Loading,
});

const EditGroupPage = Loadable({
    loader: () => import('../components/group/EditGroupPage'),
    loading: Loading,
});

const AddMatchPage = Loadable({
    loader: () => import('../components/match/AddMatchPage'),
    loading: Loading,
});

const EditMatchPage = Loadable({
    loader: () => import('../components/match/EditMatchPage'),
    loading: Loading,
});

const AddPlayerPage = Loadable({
    loader: () => import('../components/player/AddPlayerPage'),
    loading: Loading,
});

const LoginPage = Loadable({
    loader: () => import('../components/login/LoginPage'),
    loading: Loading,
});

const SignUpPage = Loadable({
    loader: () => import('../components/login/SignUpPage'),
    loading: Loading,
});

const ResetPasswordPage = Loadable({
    loader: () => import('../components/login/ResetPasswordPage'),
    loading: Loading,
});

const EditPlayerPage = Loadable({
    loader: () => import('../components/player/EditPlayerPage'),
    loading: Loading,
});

const NotFoundPage = Loadable({
    loader: () => import('../components/NotFoundPage'),
    loading: Loading,
});

export const history = createBrowserHistory();

const AppRouter = () => (
    <Router history={history}>
        <React.Fragment>
            <CssBaseline />
            <Switch>
                <PublicRoute path="/" component={LoginPage} exact={true} />
                <PublicRoute path="/signup" component={SignUpPage} />
                <PublicRoute path="/reset" component={ResetPasswordPage} exact={true} />
                <PrivateRoute path="/dashboard" component={GroupDashboardPage} />
                <PrivateRoute path="/group/create" component={AddGroupPage} />
                <PrivateRoute path="/group/edit/:id" component={EditGroupPage} />
                <PrivateRoute path="/group/:id" component={ViewGroupPage} exact={true} />
                <PrivateRoute path="/group/:groupId/match/create" component={AddMatchPage} />
                <PrivateRoute path="/match/edit/:id" component={EditMatchPage} />
                <PrivateRoute path="/group/:groupId/player/create" component={AddPlayerPage} />
                <PrivateRoute path="/player/edit/:id" component={EditPlayerPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </React.Fragment>
    </Router>
);

export default AppRouter;
