import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

import  Header  from '../components/Header';
import  HelpPage  from '../components/HelpPage';
import  ExpenseDashboardPage  from '../components/ExpenseDashboardPage';
import  AddExpensePage  from '../components/AddExpensePage';
import  EditExpensePage  from '../components/EditExpensePage';
import  NotFound  from '../components/NotFound';

const AppRouter = () => (
    <BrowserRouter>
    <div>
        <Header />
        <Switch>
            <Route path="/"  component={ExpenseDashboardPage} exact={true}/>
            <Route path="/add"  component={AddExpensePage} />
            <Route path="/edit/:id"  component={EditExpensePage} />
            <Route path="/help"  component={HelpPage} />
            <Route component={NotFound} />
        </Switch>
    </div>
</BrowserRouter>
);

export default AppRouter;