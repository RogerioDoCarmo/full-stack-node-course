import React from 'react';
import ReactDOM from 'react-dom';

import Home from './scenes/home';
import Agenda from './scenes/agenda';

import {
    BrowserRouter,
    Route,
    Switch,
} from 'react-router-dom';

import { AppProvider } from './context/index.js';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <AppProvider>
                <Route
                    path="/"
                    exact={true}
                    component={Home}
                />
                <Route
                    path="/calendar"
                    exact={true}
                    component={Agenda}
                />
            </AppProvider>
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
);

