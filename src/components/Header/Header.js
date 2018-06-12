import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

class Header extends Component {

	constructor(props) {
	  super(props);
	
	  this.state = {isToggleOn: false};

	  this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState(prevState => ({
			isToggleOn: !prevState.isToggleOn
		}));
	}

  render() {

  	let menuActive = this.state.isToggleOn ? 'is-active' : '';

    return (
	    <div className="navbar" role="navigation" aria-label="main navigation">
	      <div className="container">
	        <div className="navbar-brand">
	          <a className="navbar-item">My Company</a>

	          <a role="button" className={'navbar-burger '+menuActive} aria-label="menu" aria-expanded="false" onClick={this.handleClick}>
	            <div className="navbar-end">
		            <span aria-hidden="true"></span>
		            <span aria-hidden="true"></span>
		            <span aria-hidden="true"></span>
		        </div>
	          </a>

	          <div className={'navbar-menu' +menuActive}>
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
	    </div>
    );
  }
}

export default Header;
