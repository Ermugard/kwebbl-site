import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import PageLayout from './pages/PageLayout';
import Footer from './components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <PageLayout />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
