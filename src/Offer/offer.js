import React from 'react';
import "./offer.css";
import busLogo from "../Images/busLogo.png"
import farmLogo from "../Images/farmLogo.png"
import clouds from "../Images/clouds.png"
import sl1 from "../Images/sl1.png"
import sl11 from "../Images/sl11.png"
import sl2 from "../Images/sl2.png"
import sl22 from "../Images/sl22.png"
import sl3 from "../Images/sl3.png"
import sl33 from "../Images/sl33.png"
import offerCycle from "../Images/offerCycle.png"
import team1 from "../Images/team1.png"
import team2 from "../Images/team2.png"
import team3 from "../Images/team3.png"
import team4 from "../Images/team4.png"
import team5 from "../Images/team5.png"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";




const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};





const Offer = () => {
	return(
		<div className=" flex flex-column">


							{/*---------- WHAT WE OFFER ----------*/}
			<div className="title-cont">
      		  	<p className="heeader-title b white pt3 ttu">What We Offer?</p>
      		  	<h5 className=" white pt1 f2 i">Integrated Impact Model</h5>
      		  	<h5 className=" white pt2 ">Ifria Offer Integrated Cold Chain Solutions 
      		  								to different Clients through two categories of services:</h5>
			</div>
			<div className="mid-cont" >
			<img className="logo pt3  grow" src={busLogo} alt="logo" />
			<p className="sec-title b " > Cold Chain Services for Businesses </p>
			<p className=" i w-90"> Establish a backbone infrastructure of 10 Cold Hubs (in Airports, 
							 Maritime Ports, Agri-business zones or similar industrial zones) 
							 with a highly energy efficient renewable energy integration, 
							 logistics centers warehouses, including storage and value-added 
							 services related to Cold Storages.  </p>

			<img className="logo pt3  grow" src={farmLogo} alt="logo" />
			<p className="sec-title b " > Cold Chain Services for Farmers</p>
			<p className=" i"> We offer On-Farm Post Harvest Cooling Solutions and Technical 
								 Assistance to farmers  </p>
								 
			<img className="" src={clouds} alt="clouds"/>
			<img className="offerCycle grow" src={offerCycle} alt="offerCycle"/>						 
			</div>


							{/*---------- OUR STORY ----------*/}
			<div className="top-cont ">
			<div className="title-cont">
      		  	<p className="heeader-title b white pt3 ttu">our story</p>
      		  	<h5 className=" white pt2 w-90 center pb5">Ifria traces its roots back to 2012 when the Management team developed 
      		  								a cold storage warehouse, Friopuerto Tanger SA (FPT), at the Port of
											Tanger Med in Morocco. <br></br>
											The FPT pilot project is North Africa’s most modern Cold Hub offering 
											multiple value-added services, servicing import and export perishable
											products to retailers, food processors, and food distribution companies
											 in Morocco.</h5>
			</div>
				
				<div className="flex justify-around pt5 ">	
					<div className="flex">			
						<img className="big-logo grow " src={sl1} alt="logo" />
					<div className="flex flex-column ">
						<img className="small-logo grow  " src={sl11} alt="logo" />
						<h6 className="w4 tj measure pt2 f6 tj">Years experience in Investment & Development Programming </h6>
					</div>
					</div>
					<div className="flex">
						<img className="big-logo grow " src={sl2} alt="logo" />
					<div className="flex flex-column ">
						<img className="small-logo grow  " src={sl22} alt="logo" />
						<h6 className="w5 tj measure pt2 f6 ">Ifria Management launched the first Cold Chain facility 
														  in Morocco & North Africa’s most advanced Cold Chain facility, 
														  Friopuerto Tanger SA.</h6>
					</div>
					</div>
					<div className="flex">
						<img className="big-logo grow " src={sl3} alt="logo" />
					<div className="flex flex-column ">
						<img className="small-logo grow  " src={sl33} alt="logo" />
						<h6 className="w5 tj measure pt2 f6 tj">Years experience in Cold Chain Development in developing and frontier markets. </h6>
					</div>	
					</div>
				</div>						 
			</div>

						{/*---------- TEAM ----------*/}

			<div className="pb5 ">
				<p className="team-title ttu pt5 pb4 b"> team description </p>

					<Carousel autoPlay={false} responsive={responsive}>
					  <div>
					  	<img className="team-logo grow" src={team1} alt="logo" />
					  	<p className="sec-title b">Matthew Meredith </p>
					  	<p className="sec-title">Executive Managing Director, Operations </p>
					  	<button type="button" class="team-button f6 grow no-underline br-pill ph5 pv3 mb2 dib white bg-green b">Learn more</button>
					  </div>
					  <div>
					  	<img className="team-logo grow" src={team2} alt="logo" />
					  	<p className="sec-title b">Manuel Cabrera Kabana Sartorius </p>
					  	<p className="sec-title">Executive Managing Director, Technical Operations </p>
					  	<button type="button" class="team-button f6 grow no-underline br-pill ph5 pv3 mb2 dib white bg-green b">Learn more</button>
					  </div>
					  <div>
					  	<img className="team-logo grow" src={team3} alt="logo" />
					  	<p className="sec-title b">Maha Filali Mouncef </p>
					  	<p className="sec-title">Project Manager </p>
					  	<button type="button" class="team-button f6 grow no-underline br-pill ph5 pv3 mb2 dib white bg-green b">Learn more</button>
					  </div>
					  <div>
					  	<img className="team-logo grow" src={team4} alt="logo" />
					  	<p className="sec-title b">William Fellows </p>
					  	<p className="sec-title">Executive Director, Investment & Development </p>
					  	<button type="button" class="team-button f6 grow no-underline br-pill ph5 pv3 mb2 dib white bg-green b">Learn more</button>
					  </div>
					  <div>
					  	<img className="team-logo grow" src={team5} alt="logo" />
					  	<p className="sec-title b">Samir Belrhandoria </p>
					  	<p className="sec-title">Executive Director, Investment</p>
					  	<button type="button" class="team-button f6 grow no-underline br-pill ph5 pv3 mb2 dib white bg-green b">Learn more</button>
					  </div>
					</Carousel>

			</div>
			</div>
		)
}

export default Offer;