import React from 'react'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from '../containers/home';
import NotFound from '../containers/notFound';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  )
};

export default AppRouter
