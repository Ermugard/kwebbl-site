import React from 'react';
import routes from '../lib/route/routes';
import RouteWithSubRoutes from '../lib/route/RouteWithSubRoutes';

export default () => (<div className="page-layout">

  <main className="main">
    {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
  </main>
</div>);