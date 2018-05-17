import 'normalize.css';
import 'core-js/es6/map';
import 'core-js/es6/set';

import 'lib/api';

import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import { Store, History } from 'store/index';


import Main from 'components/containers/Main';
import Empty from 'components/views/Empty';


const requireAuth = () => {
};

History.push('/');

ReactDOM.render(
  <Provider store={ Store }>
    <Router history={ History }>
      <Route path='/' onEnter={ requireAuth } component={ Main }>
        <IndexRoute component={ Empty }/>
        <Route path='/*' component={ Empty } />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);