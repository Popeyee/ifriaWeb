import './App.css';
import React, { Component } from 'react';

import Header from './landingPage/Header/header.js';
import Offer from './landingPage/Offer/offer.js';
import Where from './landingPage/Where/where.js';
import Investor from './landingPage/Investor/investor.js';
import Footer from './landingPage/Footer/footer.js';
import Nav from './landingPage/Nav/navbar.js';
import Snav from './subNav/Snav.js';
import Bus from './services/business/sBus.js';
import Farm from './services/farmers/sFarm.js';







class App extends Component{
  
    render(){
        return (
          <div className="App">

            {/*<Header />
                        <Offer />
                        <Where />
                        <Investor />
                        <Footer />*/}
            

           <Snav />
            <Bus />

             {/*<Snav />
                <Farm />*/}
          </div>
        );
    };
 
}

export default App;
