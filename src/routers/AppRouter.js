import React from 'react';
import { BrowserRouter, Route, Link, Switch, withRouter } from "react-router-dom";

import HomePage from '../pages/HomePage';
import BizDirectory from '../pages/BizDirectory';
import BookList from '../pages/BookList';
import CEOInterviews from '../pages/CEOInterviews';
import OnlineEducation from '../pages/OnlineEducation';
import VideoPage from '../pages/VideoPage'

function AppRouter() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={HomePage} exact={true} />
          <Route path="/black-business-directory" component={BizDirectory} />
          <Route path="/essential-reading" component={BookList} />
          <Route path="/black-ceo-interviews" component={CEOInterviews} exact={true}/>
          <Route path="/black-ceo-interviews/:slug" component={VideoPage} />
          <Route path="/online-education" component={OnlineEducation} />
        </Switch>
      </BrowserRouter>
    );
}

export default AppRouter