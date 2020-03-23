import React from 'react';

import { render } from 'react-dom';

// Import CSS
import css from './styles/app.scss';

// Import Components
import App from './components/App';

// Import react router deps
import { ConnectedRouter } from 'connected-react-router';
import { Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

const router = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Route path='/'>
        <App/>
      </Route>
    </ConnectedRouter>
  </Provider>
);

render(router, document.getElementById('root'));
