import React from 'react';
import Header from './component/header_footer/Header';
import Featured from '../src/component/featured';
import BoulvardInfo from '../src/component/boulvardInfo'
import Highlights from './component/highlights';
import Pricing from './component/pricing';
import Location from './component/location';
import Footer from './component/header_footer/Footer';
import { Element } from 'react-scroll';

function App() {
  return (
    <div className="App" style={{ height:"1500px", backgroundColor:'#2F2F2F'}}>
        <Header />
        <Element name='featured'>
          <Featured/>
        </Element>
        <Element name='boulvardInfo'>
          <BoulvardInfo/>
        </Element>
        <Element name='highlights'>
          <Highlights/>
        </Element>
        <Element name='pricing'>
          <Pricing/>
        </Element>
        <Element name='location'>
          <Location/>
        </Element>
        <Element name='footer'>
          <Footer/>
        </Element>
    </div>
  );
}

export default App;
