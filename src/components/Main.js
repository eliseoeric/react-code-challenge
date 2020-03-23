import React from 'react';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom'

import Single from './Single';
import PhotoGrid from './PhotoGrid';

const Main = (props) => {
  return (
    <div>
      <h1>
        <Link to='/'>Reduxstagram</Link>
      </h1>
      <Switch>
        <Route path='/view/:postId' component={() => <Single {...props} />}></Route>
        <Route path="/" render={() => <PhotoGrid {...props} />}></Route>
      </Switch>
    </div>
  );
}

export default Main;
