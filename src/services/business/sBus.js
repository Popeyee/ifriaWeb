import React from 'react';
import "./sBus.css";
import busLogo from "./busLogo.png"
import b1 from "./b1.png"
import b2 from "./b2.png"
import b3 from "./b3.png"
import b4 from "./b4.png"




const Bus = () => {
	return(
		<div className="flex flex-column ">

								{/*----------------- HEADER -----------------*/}

			<div className="service-header " >
				<img className="logo pt3  grow" src={busLogo} alt="logo" />
				<p className="service-title b ttu pt3" > Cold Chain Services for Businesses </p>
				<p className="serivce-text f5 lh-copy  center  tracked "> Ifria  will  offer  a  comprehensive  range  of  temperature-controlled 
								services to agro-industries, modern grocery retail,
								pharmaceutical industries, hotels, and restaurants</p>
			</div>

								{/*----------------- BOX -----------------*/}

	    	<div className="service-cont flex justify-around flex-wrap ">
	    		<div className="service-box flex flex-column pb4">
	    			<img className="blogo " src={b1} alt="logo" />
	    			<p className="sec-title b ttu pt3 " > Cold Chain WAREHOUSING </p>
	    			<p className="sec-text center measure-wide tj ">Cold Chain Warehousing is the core service offered by Ifria. Ifria
											will offer short and long-term storage space for products with
											different temperature and humidity requirements ranging
											from fresh to frozen (-20°C to +4°C). Cold Chain Warehousing
											services allow Ifria customers to better manage their supply
											chains while simultaneously allowing for greater efficiency and
											increased cost savings. </p>
					<button type="button" class="sBus-button f6 grow no-underline br-pill ph5 pv3 mb2 dib white b center">Learn more</button>
	    		</div>

	    		<div className="service-box flex flex-column ">
	    			<img className="blogo " src={b2} alt="logo" />
	    			<p className="sec-title b ttu pt3  " > VALUE ADDED COLD CHAIN SERVICES</p>
	    			<p className="sec-text center measure-wide tj">As North and West African markets develop, there is a higher
											demand for value-added Cold Chain services. These high
											margin services have the potential to attract new customers in
											different industries. </p>
					<button type="button" class="sBus-button f6 grow no-underline br-pill ph5 pv3 mb2 dib white b center">Learn more</button>						
	    		</div>




	      	</div>
	      	<div className="service-cont flex justify-around flex-wrap ">
	    		<div className="service-box flex flex-column ">
	    			<img className="blogo " src={b3} alt="logo" />
	    			<p className="sec-title b ttu pt3 " > VALUE ADDED TEMPERATURE </p>
	    			<p className="sec-text2 center measure-wide tj ">Modern professional cold storage warehouses add value to a
											product through temperature and humidity management.
											Such services present many benefits, including the ability to
											achieve a product state (e.g., ripeness) for a specific delivery
											time. </p>
					<button type="button" class="sBus-button f6 grow no-underline br-pill ph5 pv3 mb2 dib white b center">Learn more</button>						
	    		</div>

	    		<div className="service-box flex flex-column  ">
	    			<img className="blogo " src={b4} alt="logo" />
	    			<p className="sec-title b ttu pt3 " > DOCUMENTATION AND ADMINISTRATIVE SUPPORT</p>
	    			<p className="sec-text2 center measure-wide tj ">Documentation and Administrative Support service aims to
											reduce the administrative burden for customers by saving
											time and reducing risk, thus improving cost margins. </p>
					<button type="button" class="sBus-button f6 grow no-underline br-pill ph5 pv3 mb2 dib white b center">Learn more</button>						
	    		</div>
	    		

	      	</div>
	    </div>
		)
}

export default Bus;

