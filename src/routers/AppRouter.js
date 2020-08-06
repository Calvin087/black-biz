import React from 'react';
import { Route, Switch } from 'react-router-dom'
import HomePage from '../pages/HomePage';
import BizDirectory from '../pages/BizDirectory';
import BookList from '../pages/BookList';
import CEOInterviews from '../pages/CEOInterviews';
import OnlineEducation from '../pages/OnlineEducation';

function AppRouter() {
    return (
        <Switch>
            <Route path='/' component={HomePage} exact={true} />
            <Route path='/black-business-directory' component={BizDirectory} />
            <Route path='/books' component={BookList} />
            <Route path='/black-ceo-interviews' component={CEOInterviews} />
            <Route path='/online-education' component={OnlineEducation} />
            <Route />
        </Switch>
    )
}

export default AppRouter