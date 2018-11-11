import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import CssBaseline from '@material-ui/core/CssBaseline';
import GroupDashboardPage from 'components/GroupDashboardPage';
import AddGroupPage from 'components/group/AddGroupPage';
import EditGroupPage from 'components/group/EditGroupPage';
import ViewGroupPage from 'components/group/ViewGroupPage';
import NotFoundPage from 'components/NotFoundPage';
import AddMatchPage from 'components/match/AddMatchPage';
import EditMatchPage from 'components/match/EditMatchPage';
import AddPlayerPage from 'components/player/AddPlayerPage';
import LoginPage from 'components/login/LoginPage';
import SignUpPage from 'components/login/SignUpPage';
import ResetPasswordPage from 'components/login/ResetPasswordPage';
import EditPlayerPage from 'components/player/EditPlayerPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

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
