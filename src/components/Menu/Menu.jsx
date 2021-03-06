import React, {Component} from 'react';
import { NavLink} from "react-router-dom";
import BurgerButton from "../BurgerButton";
import ContactButton from '../ContactButton';


import './MenuStyles.css';

export default ({open, toggleMenu}) => (
  <div className="menu">
  <BurgerButton onClick={toggleMenu}/>
  <ul className="list">
    <li className="list-item">
      <NavLink activeClassName="active" className="nav-link" to="/service">For Service Provider</NavLink>
    </li>
    <li className="list-item">
      <NavLink activeClassName="active" className="nav-link" to="/distributors">For IT Distributors</NavLink>
    </li>
    <li className="list-item">
      <NavLink activeClassName="active" className="nav-link" to="/culture">Culture</NavLink>
    </li>{/*
    <li className="list-item">
      <Link className="nav-link" to="/stories">Success Stories</Link>
    </li>
    <li className="list-item">
      <Link className="nav-link" to="/press">Press</Link>
    </li>*/}
  </ul>
  <ContactButton />
</div>
);