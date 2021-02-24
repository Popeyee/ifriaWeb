import React from 'react';
import "./header.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../Images/logo.png"
import Nav from '../Nav/navbar.js'




const Header = () => {
	return(
		
		<div className="flex flex-column cont fw9 f3 cover ">
			<div className="navi">
				<Nav />
			</div>
			<div className="flex ">
				<img className="top-logo grow" src={logo} alt="logo" /> 			 			    	
			</div>
			<div>	
	      		  <div className="header-main flex flex-column mr3  " >
	      		  	<p className="header-title  b"> INTEGRATED COLD CHAIN</p>
	      		  	<p className="header-sec f5 lh-copy measure center tj w8"> Ifria is an Integrated Cold Chain Company in North and West 
	      		  		African markets. Ifria’s mission is to develop new, modern and efficient perishable product storage capacities that 
	      		  		can more efficiently serve the growing and rapidly changing needs of the Panafrican markets. </p>
	      		  </div>
	      	</div>

      	</div>

		)
}

export default Header;
