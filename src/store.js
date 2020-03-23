import { createStore, compose, applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';

// import the root reducer
import createRootReducer from './state/reducers/index';

import comments from './data/comments';
import posts from './data/posts';

// create an object for the default data
const initialState = {
  posts,
  comments,
};

export const history = createBrowserHistory();

// const store = createStore(rootReducer, defaultState);
function configureStore(preloadedState) {
  const store = createStore(
    createRootReducer(history), // root reducer with router state
    preloadedState,
    compose(
      applyMiddleware(
        routerMiddleware(history) // for dispatching history actions
      )
    )
  );

  return store;
}

const store = configureStore(initialState);

console.log({store})

// todo movee
if (module.hot) {
  module.hot.accept('./state/reducers/', () => {
    const nextRootReducer = require('./state/reducers/index').default;
    store.replaceReducer(nextRootReducer);
  });
}

export default store;
