import React from 'react';
import {Router, Route, Switch, Link, NavLink} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import  LoginPage from '../components/LoginPage';
import  HelpPage from '../components/HelpPage';
import  ExpenseDashboardPage  from '../components/ExpenseDashboardPage';
import  AddExpensePage  from '../components/AddExpensePage';
import  EditExpensePage  from '../components/EditExpensePage';
import  NotFound  from '../components/NotFound';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history  = createHistory();

const AppRouter = () => (
    <Router history={history}>
    <div>
        <Switch>
            <PublicRoute path="/"  component={LoginPage} exact={true}/>
            <PrivateRoute path="/dashboard"  component={ExpenseDashboardPage}/>
            <PrivateRoute path="/add"  component={AddExpensePage} />
            <PrivateRoute path="/edit/:id"  component={EditExpensePage} />
            <Route path="/help"  component={HelpPage} />
            <Route component={NotFound} />
        </Switch>
    </div>
    </Router>
);

export default AppRouter;