import React from 'react';
import farmLogo from "./farmLogo.png"
import f1 from "./f1.png"
import f2 from "./f2.png"





const Farm = () => {
	return(
		<div className="flex flex-column ">

								{/*----------------- HEADER -----------------*/}

			<div className="service-header " >
				<img className="logo pt3  grow" src={farmLogo} alt="logo" />
				<p className="service-title b ttu pt3" > COLD CHAIN SERVICES FOR FARMERS </p>
				<p className="serivce-text f5 lh-copy  center  tracked  "> Ifria will offer a global network of remotely operated 
								cold storage units in developing agricultural areas which is available to
								growers when they need it. In order to achieve this, Ifria will form partnerships 
								with first mile distribution companies.</p>
			</div>

								{/*----------------- BOX -----------------*/}

	    	<div className="service-cont flex justify-around flex-wrap ">
	    		<div className="service-box flex flex-column pb4">
	    			<img className="blogo " src={f1} alt="logo" />
	    			<p className="sec-title b ttu pt3 " > ON-FARM POST HARVEST COOLING SOLUTIONS </p>
	    			<p className="sec-text center measure-wide tj ">This solution consists of bringing affordable Cold Chain
									integration to the first mile to prevent loss and wastage
									representing enormous energy and water losses that at once
									contribute to climate change vulnerability and drive it. Ifria can
									develop with ecosystem partners programs, intended for grant
									support, that focus on an innovative business model that
									brings smaller-scale Cold Chain assets into an integrated
									model. </p>
					<button type="button" class="sBus-button f6 grow no-underline br-pill ph5 pv3 mb2 dib white b center">Learn more</button>
	    		</div>

	    		<div className="service-box flex flex-column ">
	    			<img className="blogo " src={f2} alt="logo" />
	    			<p className="sec-title b ttu pt3  " > PROVIDE TECHNICAL ASSISTANCE TO FARMERS</p>
	    			<p className="sec-text center measure-wide tj">Ifria will provide Technical Assistance and support to farmers.
									Ifria will implement training to local small-scale farmers
									regarding how to manage and operate Cold Chain assets. This
									Technical Assistance will make the farms more robust, better
									managed, better prepared for growth, and vitally, safer
									prospects for commercial lending in the future. </p>
					<button type="button" class="sBus-button f6 grow no-underline br-pill ph5 pv3 mb2 dib white b center">Learn more</button>						
	    		</div>

	      	</div>
	      	
	    </div>
		)
}

export default Farm;

