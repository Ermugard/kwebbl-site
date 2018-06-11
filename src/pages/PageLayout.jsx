import React from 'react';
import { Route, Switch } from "react-router-dom";

import Home from '../pages/Home/Home';
import Service from './Service/Service';
import Distributors from './Distributors/Distributors';
import Culture from './Culture/Culture';
import Stories from './Stories/Stories';
import Press from '../pages/Press';
import ContactUs from '../pages/ContactUs/ContactUs';

import Vayama from '../pages/Stories/StoryList/Vayama';


export default () => (<div className="page-layout">
  <main className="main">
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/service" component={Service} />
      <Route exact path="/distributors" component={Distributors} />
      <Route exact path="/culture" component={Culture} />
      <Route exact path="/stories" component={Stories} />
      <Route exact path="/press" component={Press} />

      <Route exact path="/contactus" component={ContactUs} />

      <Route exact path="/story/vayama" component={Vayama} />
    </Switch>
  </main>
</div>);