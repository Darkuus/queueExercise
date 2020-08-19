import React from 'react';
import { Route, Router, withRouter, RouteComponentProps } from 'react-router-dom';

import Home from '../Pages/Home/Index';
import PickPriQueue from '../Pages/PickPriQueue/Index';

const Routes: React.FC = () => (
    <Route>
        <Route component={ Home } path="/" exact />
        <Route component={ PickPriQueue } path="/PickPriQueue" />
    </Route>
);

export default Routes;