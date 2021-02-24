import React from 'react';
import "./Snav.css";
import navLogo from "./navLogo.png";
import dots from "./dots.png";


const Snav = () => {
	return(
		<div className="coldCont flex flex-column ">
			
				<div className="Snavi">			 			    	
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

		      	<div className="">
			      	<img className="navLogo " src={navLogo} alt="logo" />
			      	{/*<img className="bLogo " src={blueLogo} alt="logo" />*/}
		      	</div>

		      	<div className="dots">
		      		<img className=" " src={dots} alt="logo" />
		      	</div>
	      
	    </div>
		)
}

export default Snav;

