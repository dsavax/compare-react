import React from 'react';
import './Footer.css';

const Footer = () => {

    return (
      <div>
            <footer className="footer is-primary">
		      <div class= "container">
		        <div className="columns">
		          <div className="column">
		            <p>Интересно как это будет выглядеть на русском языке.</p>
		          </div>
		          <div className="column has-text-right">
		            <a className="icon" href="#"><i class="fa fa-facebook"></i></a>
		            <a className="icon" href="#"><i class="fa fa-twitter"></i></a>
		          </div>
		        </div>
		      </div>
		    </footer>
      </div>
    );
 
}

export default Footer;
