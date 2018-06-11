import React from 'react';
import Home from '../../pages/Home/Home';
import Service from '../../pages/Service/Service';
import Distributors from '../../pages/Distributors/Distributors';
import Culture from '../../pages/Culture/Culture';
import Stories from '../../pages/Stories/Stories';
import Press from '../../pages/Press';

const routes = [
  {
    path: "/",
    exact: true,
    component: Home
  },
  {
    path: "/service",
    component: Service
  },
  {
    path: "/distributors",
    component: Distributors
  },
  {
    path: "/culture",
    component: Culture
  },
  {
    path: "/stories",
    component: Stories
  },
  {
    path: "/press",
    component: Press
  }
];

export default routes;