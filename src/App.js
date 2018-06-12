import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import PageLayout from './pages/PageLayout';
import Footer from './components/Footer/Footer';

class App extends Component {
  render() {
    console.log(this.props);

    return (
      <BrowserRouter>
        <Route
          render={({ location }) => (
            <div className={"App page-" + (location.pathname && location.pathname.replace("/", ""))}>
              <PageLayout location={location} />
              <Footer />
            </div>
          )}
        />
      </BrowserRouter>
    );
  }
}

export default App;
