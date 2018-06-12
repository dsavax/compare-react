import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
	    <nav className="navbar" role="navigation" aria-label="main navigation">
	      <div className="container">
	        <div className="navbar-brand">
	          <a className="navbar-item">My Company</a>

	          <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
	            <span aria-hidden="true"></span>
	            <span aria-hidden="true"></span>
	            <span aria-hidden="true"></span>
	          </a>

	          <div className="navbar-menu">
	              <div className="navbar-end">

	              <Link to="/" className="navbar-item">Home</Link>
				  <Link to="/faq" className="navbar-item">Features</Link>
				  <Link to="/faq" className="navbar-item">About</Link>
				  <Link to="/faq" className="navbar-item">FAQ</Link>

	                <div className="navbar-item">
	                  <p className="control">
	                    <a className="button is-primary is-outlined">
	                      <span className="icon">
	                        <i className="fa fa-download"></i>
	                      </span>
	                      <span>Join Now</span>
	                    </a>
	                  </p>
	                </div>
	              </div>
	          </div>
	        </div>
	      </div>
	    </nav>
    );
  }
}

export default Header;
