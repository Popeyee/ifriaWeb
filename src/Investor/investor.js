import React from 'react';
import "./investor.css";
import icon1 from "../Images/icon1.png"
import icon2 from "../Images/icon2.png"
import icon3 from "../Images/icon3.png"


const Investor = () => {
	return(
		<div className=" flex flex-column pb6">
			<div className="pt5 ">
	      		  	<p className="investor-title ttu pt4 b ">BECOME AN INVESTOR</p>	
	      		  	<p className="sec-title center">Ifria will bring long-term vision and patient
	      		  	 capital along with operating support to build value-unlocking Cold Chain.</p>  
			</div>

			<div className="flex justify-around pt5">
				<div className=" flex-column w-25">
					<img className=" grow " src={icon1} alt="logo" />
					<p className="sec-title center pt3 ">Ifria seeks development finance support, in the 
					form of grant money and other non-dilutive support for an integrated approach.</p> 
				</div>
				<div className=" flex-column w-25">
					<img className=" grow " src={icon2} alt="logo" />
					<p className="sec-title center pt3">Ifria aims to access long term
					concessional debt financing.</p> 
				</div>

				<div className=" flex-column w-25">
					<img className=" grow " src={icon3} alt="logo" />
					<p className="sec-title center pt2">Ifria offers equity stakes to long-term
					investors active in the cold chain sector and seeking sustainable and
					impactful investment.</p> 
				</div>
			</div>

			<div className="">
				<p className="team-title ttu pt4 b ">contact</p>
			</div>

			<div className="center contact-form  br4">

				<div className="flex flex-column ">
					<p className=" ttc pt4 sec-title "> contact us </p>

					<div className="flex justify-around  pb5" >
						<input className="invest-input w-20 br4 bg-animate hover-bg-white" type="text" id="fname" name="fname" placeholder="Name*"/>
						<input className="invest-input w-20 br4 bg-animate hover-bg-white" type="text" id="fname" name="fname" placeholder="Email*"/>
						<input className="invest-input w-20 br4 bg-animate hover-bg-white" type="text" id="fname" name="fname" placeholder="Phone*" />
					</div>

					<div className=" flex pb4 ">
						<textarea className="w-90 br4 center" id="subject" name="subject" placeholder="Write something.." ></textarea>				
					</div>
					<button type="button" class="send-button w-20 center f6 grow no-underline br-pill ph5 pv3 mb2 dib white b">Send</button>
				</div>

			</div>
			
		</div>



	)
}

export default Investor;