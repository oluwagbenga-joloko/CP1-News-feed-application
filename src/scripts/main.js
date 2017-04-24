import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/main.scss';
import Sources from './components/Sources.jsx';
import App from './components/App.jsx';
import Favorites from './components/favorites.jsx';
import About from './components/about.jsx';
import News from './components/News.jsx';
import login from './components/login.js'
import Logout from './components/logout.js'
import {Router, Route ,IndexRoute, hashHistory } from 'react-router';
ReactDOM.render(
  <Router history={hashHistory}>
      <Route path='/' component={App}>
      <IndexRoute component={Sources}></IndexRoute>
      <Route path='about/:js' component={About}></Route>
      <Route path='favorites' component={Favorites}></Route>
      <Route path='newslist(/:source)' component={News}></Route>
      </Route>
   </Router>,
document.getElementById('app')); 