import React from 'react';
import Header from '../../../components/Header/Header';

import imgSrc from '../../../public/images/stories-section1.png';

export default () => (<section className="section_1">
  <div className="stories-head-bg" />
  <Header />
  <div className="content">
    <div className="left">
      <h3>Success Stories</h3>
      <h2>What do end-users
        think of us?</h2>
    </div>
    <div className="right">
      <img src={imgSrc} alt="schema" title="schema" />
    </div>
  </div>
</section>);
