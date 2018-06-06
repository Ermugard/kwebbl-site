import React, { Component } from 'react';
import { HashRouter } from "react-router-dom";
import PageLayout from './pages/PageLayout';
import Footer from './components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <PageLayout />
          <Footer />
        </div>
      </HashRouter>
    );
  }
}

export default App;
