import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/main.scss';
import Sources from './components/Sources.jsx';
import App from './components/App.js';
import Favorites from './components/favorites.js';
import Signout from './components/signout.js';
import About from './components/about.js';
import News from './components/News';
import login from './components/login'
import {Router, Route ,IndexRoute, hashHistory } from 'react-router';
ReactDOM.render(
  <Router history={hashHistory}>
      <Route path='/' component={App}>
      <IndexRoute component={Sources}></IndexRoute>
      <Route path='login' component={login}></Route>
      <Route path='about/:js' component={About}></Route>
      <Route path='favorites' component={Favorites}></Route>
      <Route path='signout' component={Signout}></Route>
      <Route path='newslist(/:source)' component={News}></Route>
      </Route>
   </Router>,
document.getElementById('app')); 