// RouteHelpers.js

import React from 'react';
import { Route } from 'react-router-dom';
import { routes } from './routeConfig';
import PrivateRoute from './PrivateRoute';

export const renderRoutes = isAuthenticated => {
    return routes.map((route, index) => {
        const { path, component: Component, private: isPrivate } = route;
        return isPrivate ? (
            <PrivateRoute
                exact
                key={index}
                path={path}
                component={Component}
                isAuthenticated={isAuthenticated}
            />
        ) : (
            <Route exact key={index} path={path} component={Component} />
        );
    });
};
