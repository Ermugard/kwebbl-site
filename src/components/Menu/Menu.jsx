import React from 'react';
import { Link } from "react-router-dom";

import './MenuStyles.css';

export default () => (<div className="menu">
  <ul className="list">
    <li className="list-item">
      <Link className="nav-link" to="/service">For Service Provider</Link>
    </li>
    <li className="list-item">
      <Link className="nav-link" to="/distributors">For IT Distributors</Link>
    </li>
    <li className="list-item">
      <Link className="nav-link" to="/culture">Culture</Link>
    </li>
    <li className="list-item">
      <Link className="nav-link" to="/stories">Success Stories</Link>
    </li>
    <li className="list-item">
      <Link className="nav-link" to="/press">Press</Link>
    </li>
  </ul>
</div>);
