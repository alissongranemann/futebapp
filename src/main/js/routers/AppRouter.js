import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'
import GroupDashboardPage from 'components/GroupDashboardPage';
import AddGroupPage from 'components/group/AddGroupPage';
import EditGroupPage from 'components/group/EditGroupPage';
import GroupPage from 'components/group/GroupPage';
import NotFoundPage from 'components/NotFoundPage';
import AddGamePage from 'components/game/AddGamePage';
import AddPlayerPage from '../components/player/AddPlayerPage';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createBrowserHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path="/" component={LoginPage} exact={true} />
                <PrivateRoute path="/dashboard" component={GroupDashboardPage} />
                <PrivateRoute path="/group/create" component={AddGroupPage} />
                <PrivateRoute path="/group/edit/:id" component={EditGroupPage} />
                <PrivateRoute path="/group/:id" component={GroupPage} exact={true} />
                <PrivateRoute path="/group/:groupId/game/create" component={AddGamePage} />
                <PrivateRoute path="/group/:groupId/player/create" component={AddPlayerPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;
