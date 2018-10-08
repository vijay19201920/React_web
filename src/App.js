import React, { Component } from 'react';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Feature from './components/Feature';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Header></Header>
       <About></About>
       <Services></Services>
       <Portfolio></Portfolio> 
       <Feature></Feature>
      </div>
    );
  }
}

export default App;
