import React from 'react';
import Header from '../../components/Header/Header';

import Section1 from './Sections/Section1';
import Section2 from './Sections/Section2';
import Section3 from './Sections/Section3';
import Section4 from './Sections/Section4';

import './Culture.css';

export default () => (<div className="culture">
  <Header />
  <Section1 />
  <Section2 />
  <Section3 />
  <Section4 />
</div>);
