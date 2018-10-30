import React, { Component } from 'react';
import './resources/style.css';
import Header from './components/header_footer/Header';
import Footer from './components/header_footer/Footer';


import Featured from './components/featured';
import Highlights from './components/highlights';
import Facilities from './components/facilities';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Featured/>
        <Highlights/>
        <Facilities/>
        <Footer />
      </div>
    );
  }
}

export default App;
