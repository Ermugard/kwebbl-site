import React from 'react';
import RocketIcon from '../../../public/svgIcons/rocket-icon.js';

import Carousel from '../HomeCarousel';

export default () => (<section className="section_6">
  <div className="content">
    <RocketIcon />
    <h2>The Unified Future</h2>
    <p>With the implementation of a full UC suite Kwebbl will be upgraded to a high end communications solution with secured video, chat and conferencing functionalities, available anywhere from any device.</p>
    <div className="carousel">
      <Carousel />
    </div>
  </div>
</section>);
