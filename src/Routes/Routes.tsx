import React from 'react';
import { Route, Router, withRouter, RouteComponentProps } from 'react-router-dom';

import Home from '../Pages/Home/Index';
import PickPriQueue from '../Pages/PickPriQueue/Index';
import ClientInfo from '../Pages/ClientInfo/Index';
import PriBox from '../Pages/PriBox/Index';
import NPickPriQueue from '../Pages/PickNPriQueue/Index';
import NPriBox from '../Pages/NPriBox/Index';
import Header from '../Components/Header/Index';

const Routes: React.FC = () => (
    <Route>
        <Header/>
        <Route component={ Home } path="/" exact />
        <Route component={ ClientInfo } path="/ClientInfo" />
        <Route component={ PickPriQueue } path="/PickPriQueue" />
        <Route component={ NPickPriQueue } path="/PickNPriQueue" />
        <Route component={ PriBox } path="/PriBox" />
        <Route component={ NPriBox } path="/NPriBox" />
    </Route>
);

export default Routes;