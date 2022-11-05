import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';
import React from 'react';
import { HashRouter } from 'react-router-dom';
import { NotificationContainer } from 'react-notifications';

import Logo from '../components/Logo';
import Nav from '../components/Nav';
import Routes from '../main/Routes';

export default props =>
    <HashRouter>
        <div className="app">
            <Logo />
            <Nav />
            <Routes />
            <NotificationContainer />
        </div>
    </HashRouter>