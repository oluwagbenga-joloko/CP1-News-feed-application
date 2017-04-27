import React, { Component } from 'react';
import { Link } from 'react-router';
import user from '../model/usermodel'
class Header extends Component {
  render() {
    return (
      <div className="navtop">
        <nav className="navbar navbar-inverse navbar-fixed-top">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">HotLines</a>
            </div>
            <ul className="nav navbar-nav">
              <li className="active"><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              {/* <li><a href="#"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>*/}
             
              
              <li><a href="/#/logout"><span className="glyphicon glyphicon-log-out" /> Log Out</a></li>
            </ul>
             <form className="nav navbar-nav navbar-right">

      </form>
          </div>
        </nav>
      </div>
    );
  }
}
export default Header;
