import React from 'react';
import { Route, Router, withRouter, RouteComponentProps } from 'react-router-dom';

import Home from '../Pages/Home/Index';
import PickPriQueue from '../Pages/PickPriQueue/Index';
import ClientInfo from '../Pages/ClientInfo/Index';
import PriBox from '../Pages/PriBox/Index';
import NPickPriQueue from '../Pages/PickNPriQueue/Index';

const Routes: React.FC = () => (
    <Route>
        <Route component={ Home } path="/" exact />
        <Route component={ ClientInfo } path="/ClientInfo" />
        <Route component={ PickPriQueue } path="/PickPriQueue" />
        <Route component={ NPickPriQueue } path="/NPickPriQueue" />
        <Route component={ PriBox } path="/PriBox" />
    </Route>
);

export default Routes;