import React, { Component } from 'react';
import { Link } from 'react-router';
import user from '../model/usermodel'
class Header extends Component {
  render() {
    return (
      <div className="navtop">
        <nav className="navbar">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
              <a className="navbar-brand Newsify">Newsify</a>
            </div>
            <div className="collapse navbar-collapse" id ="bs">
            <ul className="nav navbar-nav">
              <li><a href="#">Home</a></li>
              <li><a href="/#/about">About</a></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">              
              <li><a href="/#/logout"><span className="glyphicon glyphicon-log-out" /> Log Out</a></li>
            </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
export default Header;
