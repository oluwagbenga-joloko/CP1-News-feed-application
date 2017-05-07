import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import './styles/main.scss';
import Sources from './components/Sources.jsx';
import App from './components/App.jsx';
import About from './components/about.jsx';
import News from './components/News.jsx';
import login from './components/login.jsx';
import Logout from './components/logout.jsx';
import User from './model/User';

/**
 * checks if user is logged in
 * @param {any} nextState
 * @param {any} replace
 * @returns {undefined} no return value
 */
function requireAuth(nextState, replace) {
  if (!User.isLogin) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }

    });
  }
}
/**
 * checks if user is logged out
 * @param {any} nextState
 * @param {any} replace
 * @returns {undefined} no return value.
 */
function checkAuth(nextState, replace) {
  if (User.isLogin) {
    replace({
      pathname: '/',
      state: { nextPathname: nextState.location.pathname }

    });
  }
}
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App} onEnter={requireAuth} >
      <IndexRoute component={Sources} />
      <Route path="about" component={About} />
      <Route path="newslist(/:source)" component={News} />
    </Route>
    <Route path="login" component={login} onEnter={checkAuth} />
    <Route path="logout" component={Logout} />
  </Router>,
document.getElementById('app'));
