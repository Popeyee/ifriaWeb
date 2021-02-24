import React from 'react';
import "./navbar.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../Images/logo.png"


const Nav = () => {
	return(
		<div className="  ">
			 <img className="top-logo grow" src={logo} alt="logo" /> 			 			    	
				<div class=" w-100 ph3 pv3 pv4-ns ph4-m ph5-l">	
				  <nav class=" f6 fw6 ttu tracked fr">
				    <a class="link dim dib mr3" href="#ss" title="Home">Home</a>
				    <a class="link dim dib mr3" href="#ss" title="About">About us</a>
				    <a class="link dim dib mr3" href="#ss" title="Store">Serivces</a>
				    <a class="link dim dib mr3" href="#ss" title="Contact">Our team</a>
				    <a class="link dim dib mr3" href="#ss" title="Contact">Sustainability</a>
				    <a class="link dim dib mr3" href="#ss" title="Contact">Become an investor</a>
				    <a class="link dim dib" href="#ss" title="Contact">Contact</a>
				  </nav>
				</div>	
		</div>
	)
}

export default Nav;