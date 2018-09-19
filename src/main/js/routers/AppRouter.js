import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GroupDashboardPage from 'components/GroupDashboardPage';
import AddGroupPage from 'components/group/AddGroupPage';
import EditGroupPage from 'components/group/EditGroupPage';
import GroupPage from 'components/group/GroupPage';
import HelpPage from 'components/HelpPage';
import NotFoundPage from 'components/NotFoundPage';
import Header from 'components/Header';
import AddGamePage from 'components/game/AddGamePage';
import AddPlayerPage from '../components/player/AddPlayerPage';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={GroupDashboardPage} exact={true} />
        <Route path="/group/create" component={AddGroupPage} />
        <Route path="/group/edit/:id" component={EditGroupPage} />
        <Route path="/group/:id" component={GroupPage} exact={true} />
        <Route path="/group/:groupId/game/create" component={AddGamePage} />
        <Route path="/group/:groupId/player/create" component={AddPlayerPage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
