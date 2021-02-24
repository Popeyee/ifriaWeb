import React from 'react';
import "./footer.css";
import footerLogo from "../Images/footerLogo.png"
import ig from "../Images/ig.png"
import fb from "../Images/fb.png"
import twitter from "../Images/twitter.png"
import linkLogo from "../Images/linkLogo.png"
import mailLogo from "../Images/mailLogo.png"
import phoneLogo from "../Images/phoneLogo.png"
import pinLogo from "../Images/pinLogo.png"


const Footer = () => {
	return(
		<div className="footer-cont flex">

								{/*----------side_1----------*/}
			<div className="about-side1 flex flex-column  w-40 pt4">
				<button type="button" 
						class="footer-button f5 grow no-underline br-pill ph5 pv3 mb2 dib white b w5 center ttc">About us</button>
				
				<div className="flex flex-start pl5 pt4">
					<img className="footer-logo grow " src={footerLogo} alt="logo" />
				</div>

				<div className="flex flex-start pl5 pt5">
					<h3 className=" f5 tj measure  "> 
									Ifria is an integrated Cold Chain development company
									(DevCo) focused on developing and operating, in
									franchise, license or directly Cold Chain logistics assets
									ranging from added value storage/logistic hubs to first
									mile Cold Chain. Ifria integrates lessons from its
									founders Management work in Cold Chain development
									in developing and frontier markets globally to profitably
									develop impactful Cold Chain assets in developing
									North and West African markets. 
					</h3>
				</div>

				<div className="flex justify-around pt5 w-70 center">
					<img className="social-logo grow " src={ig} alt="logo" />
					<img className="social-logo grow " src={fb} alt="logo" />
					<img className="social-logo grow " src={twitter} alt="logo" />
				</div>

			</div>

								{/*----------side_2----------*/}
			
			<div className=" flex flex-column  w-20 pt4">
				<button type="button" 
						class="footer-button f5 grow no-underline br-pill ph5 pv3 mb2 dib white b w5 center ttc">Links</button>		
			
				<div class=" white center tj pt5 ttu  ">
					<div className="pa2  ">
						<img className="pr2 " src={linkLogo} alt="logo" />
						<a href="#ss">Home</a>				
					</div>
					<div className="pa2">
						<img className="pr2 " src={linkLogo} alt="logo" />
						<a href="#ss">About us</a>				
					</div>
					<div className="pa2">
						<img className="pr2 " src={linkLogo} alt="logo" />
						<a href="#ss">Services</a>				
					</div>
					<div className="pa2">
						<img className=" pr2" src={linkLogo} alt="logo" />
						<a href="#ss">Our team</a>				
					</div>
					<div className="pa2">
						<img className="pr2 " src={linkLogo} alt="logo" />
						<a href="#ss"> Sustainability</a>				
					</div>
					<div className="pa2">
						<img className=" pr2" src={linkLogo} alt="logo" />
						<a href="#ss">Become an investor</a>				
					</div>
					<div className="pa2">
						<img className="pr2 " src={linkLogo} alt="logo" />
						<a href="#ss">Contact</a>				
					</div>

				</div>
			</div>

								{/*----------side_3----------*/}			

			<div className=" flex flex-column  w-40 pt4 center">

				<button type="button" 
						class="footer-button f5  grow no-underline br-pill ph5 pv3 mb2 dib white b  center ttc">contact informations</button>		
				
				<div className="center">
					<div class="flex  center tj pt4 ttu  ">
						<img className=" " src={pinLogo} alt="logo" />	
						<h6 className="white pl3">Washington, DC, USA</h6>
					</div>
					<div class="flex  center tj pt4 ttu  ">
						<img className=" " src={mailLogo} alt="logo" />	
						<h6 className="white pl3">contact@ifriacold.com</h6>
					</div>
					<div class="flex  center tj pt4 ttu pb4 ">
						<img className=" " src={phoneLogo} alt="logo" />	
						<h6 className="white pl3">(+1) 202-550-5627</h6>
					</div>
				</div>

				<button type="button" 
						class="other-button f5 grow no-underline br-pill ph5 pv3 mb2 dib white b  center ttc ">Newsletter</button>

				<h3 className=" f5 tj measure center pt2 pb2"> Interested in learning more about Ifria? Sign up to receive our new
												distribution List.</h3>
				
				<input className="footer-input br4 w-50 center  ttc" type="text" id="fname" name="fname" placeholder=" enter your email"/>
				<div className="pt2">
					<button type="button" 
							class="submit-button f5 grow no-underline br-pill ph4 pv3 mb2 dib b  center ttc ">Submit now</button>
				</div>
			</div>
		






		</div>



	)
}

export default Footer;