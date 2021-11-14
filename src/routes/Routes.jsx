import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { allRoutes } from './allRoutes';

const Routes = () => {
    return (
        <Switch>
            { allRoutes.map((route, item) => 
                <Route key={ item } path={ route.path } component={ route.component } exact/>
            ) }
            <Redirect to='/error'/>
        </Switch>
    );
}

export default Routes;