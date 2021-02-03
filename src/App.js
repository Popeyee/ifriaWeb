import './App.css';
import React, { Component } from 'react';
import Header from './Header/header.js'
import Offer from './Offer/offer.js'
import Where from './Where/where.js'
import Investor from './Investor/investor.js'
import Footer from './Footer/footer.js'




class App extends Component{
  
    render(){
        return (
          <div className="App">
            <Header />
            <Offer />
            <Where />
            <Investor />
            <Footer />
          </div>
        );
    };
 
}

export default App;
