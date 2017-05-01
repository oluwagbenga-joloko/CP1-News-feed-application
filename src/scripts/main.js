import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/main.scss';
import Sources from './components/Sources.jsx';
import App from './components/App.jsx';
import Favorites from './components/favorites.jsx';
import About from './components/about.jsx';
import News from './components/News.jsx';
import login from './components/login.jsx'
import Logout from './components/logout.js'
import {Router, Route ,IndexRoute, hashHistory } from 'react-router';
import user from './model/usermodel'

function requireAuth(nextState, replace) {
 if (!user.isLogin){
 replace({
 pathname: '/login',
 state: { nextPathname: nextState.location.pathname } 

 })
}
}

function checkAuth(nextState, replace) {
 if (user.isLogin){
 replace({
 pathname: '/',
 state: { nextPathname: nextState.location.pathname } 

 })
}

}
ReactDOM.render(
  <Router history={hashHistory}>
      <Route path='/' component={App} onEnter={requireAuth} >
        <IndexRoute component={Sources}></IndexRoute>
        <Route path='about' component={About}></Route>
        <Route path='favorites' component={Favorites}></Route>
        <Route path='newslist(/:source)' component={News}></Route>
      </Route>
      <Route path = "login" component={login} onEnter={checkAuth}></Route>
      <Route path = "logout" component={Logout}></Route>
   </Router>,
document.getElementById('app')); 