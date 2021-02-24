import React from 'react';
import "./where.css";
import map from "../Images/map.png"

const Where = () => {
	return(
		<div className="">
			<div className="w-title">
	      		  	<p className="team-title ttu pt4 b">WHERE WE DO IT</p>	
	      		  	<p className="sec-title">Ifria’s target market is North and West Africa</p>  
			</div>
			<img className="map-logo grow pt4" src={map} alt="logo" />
		</div>
	)
}

export default Where;
