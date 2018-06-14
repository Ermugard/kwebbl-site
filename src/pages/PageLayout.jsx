import React from 'react';
import {Route, Switch} from "react-router-dom";
import {TransitionGroup, CSSTransition} from 'react-transition-group';

import Home from '../pages/Home/Home';
import Service from './Service/Service';
import Distributors from './Distributors/Distributors';
import Culture from './Culture/Culture';
import Stories from './Stories/Stories';
// import Press from '../pages/Press';
import ContactUs from '../pages/ContactUs/ContactUs';

// import Vayama from '../pages/Stories/StoryList/Vayama';


class PageLayout extends React.Component {

  componentDidUpdate() {
    window.scrollTo(0, 0);
  }

  render() {
    const props = this.props;
    return (
      <div className={"page-layout"}>
        <main className="main">
          <TransitionGroup component="div" className={"transition-group"}>
            <CSSTransition
              key={props.location && props.location.key}
              timeout={300}
              classNames="fade"
            >
              <Switch location={props.location}>
                <Route exact path="/" component={Home}/>
                <Route exact path="/service" component={Service}/>
                <Route exact path="/distributors" component={Distributors}/>
                <Route exact path="/culture" component={Culture}/>
                <Route exact path="/stories" component={Stories}/>
                <Route exact path="/contactUs" component={ContactUs}/>
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        </main>
      </div>
    )
  }
};

export default PageLayout;