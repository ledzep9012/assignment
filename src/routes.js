import React from 'react';
import { Route, Switch } from 'react-router';

import Layout from './hoc/Layout';
import Home from './containers/QuoteContainer';

const Routes = () => (
  <div>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={() => <h1>Page Not Found</h1>} />
      </Switch>
    </Layout>
  </div>
);

export default Routes;
