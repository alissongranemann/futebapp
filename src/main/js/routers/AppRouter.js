import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'
import GroupDashboardPage from 'components/GroupDashboardPage';
import AddGroupPage from 'components/group/AddGroupPage';
import EditGroupPage from 'components/group/EditGroupPage';
import ViewGroupPage from 'components/group/ViewGroupPage';
import NotFoundPage from 'components/NotFoundPage';
import AddGamePage from 'components/game/AddGamePage';
import EditGamePage from 'components/game/EditGamePage';
import AddPlayerPage from 'components/player/AddPlayerPage';
import LoginPage from 'components/LoginPage';
import SignUpPage from 'components/SignUpPage';
import EditPlayerPage from 'components/player/EditPlayerPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import ResetPasswordPage from 'components/ResetPasswordPage';

export const history = createBrowserHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path="/" component={LoginPage} exact={true} />
                <PublicRoute path="/signup" component={SignUpPage} />
                <PublicRoute path="/reset" component={ResetPasswordPage} exact={true} />
                <PrivateRoute path="/dashboard" component={GroupDashboardPage} />
                <PrivateRoute path="/group/create" component={AddGroupPage} />
                <PrivateRoute path="/group/edit/:id" component={EditGroupPage} />
                <PrivateRoute path="/group/:id" component={ViewGroupPage} exact={true} />
                <PrivateRoute path="/group/:groupId/game/create" component={AddGamePage} />
                <PrivateRoute path="/game/edit/:id" component={EditGamePage} />
                <PrivateRoute path="/group/:groupId/player/create" component={AddPlayerPage} />
                <PrivateRoute path="/player/edit/:id" component={EditPlayerPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;
