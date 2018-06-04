import React from 'react';
import Header from '../../../components/Header/Header';

import imgSrc from '../../../public/images/home-section1.png';

export default () => (<section className="section_1">
  <div className="home-head-bg" />
  <Header />
  <div className="content">
    <div className="left">
      <h3>Discover the power of</h3>
      <h2>Smart Cloud Communications</h2>
      <p>
        Our state of the art communications platform for Service Providers and IT Distributors caters to the next generation of integrated cloud communication and collaboration solutions.
      </p>
    </div>
    <div className="right">
      <img src={imgSrc} alt="schema" title="schema" />
    </div>
  </div>
</section>);
