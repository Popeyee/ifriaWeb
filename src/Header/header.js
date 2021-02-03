import React from 'react';
import "./header.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../Images/logo.png"




const Header = () => {
	return(
		<div className="flex flex flex-column cont fw9 f3 cover ">
		<div className="flex ">
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

			
      		  <div className="flex flex-column header-main mr3  " >
      		  	<p className="header-title  b"> NTEGRATED COLD CHAIN</p>
      		  	<p className="header-sec f5 lh-copy measure center tj w8"> Ifria is an Integrated Cold Chain Company in North and West 
      		  		African markets. Ifria’s mission is to develop new, modern and efficient perishable product storage capacities that 
      		  		can more efficiently serve the growing and rapidly changing needs of the Panafrican markets. </p>
      		  </div>
      	</div>

		)
}

export default Header;
