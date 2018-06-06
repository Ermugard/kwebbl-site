import React from 'react';
import { Route, Switch } from "react-router-dom";

import Home from '../pages/Home/Home';
import Service from './Service/Service';
import Distributors from '../pages/Distributors';
import Culture from '../pages/Culture';
import Stories from '../pages/Stories';
import Press from '../pages/Press';


export default () => (<div className="page-layout">
  <main className="main">
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/service" component={Service} />
      <Route exact path="/distributors" component={Distributors} />
      <Route exact path="/cultures" component={Culture} />
      <Route exact path="/stories" component={Stories} />
      <Route exact path="/press" component={Press} />
    </Switch>
  </main>
</div>);