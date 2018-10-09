import React, { Component } from 'react';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Feature from './components/Feature';
import Contacts from './components/Contacts';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Header></Header>
       <About></About>
       <Services></Services>
       <Portfolio></Portfolio> 
       <Feature></Feature>
       <Contacts></Contacts>
       <Footer></Footer>
      </div>
    );
  }
}

export default App;
