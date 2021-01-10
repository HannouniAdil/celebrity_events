import React from 'react';
import Header from './component/header_footer/Header';
import Featured from '../src/component/featured';
import BoulvardInfo from '../src/component/boulvardInfo'
import Highlights from './component/highlights';

function App() {
  return (
    <div className="App" style={{ height:"1500px", backgroundColor:'#2F2F2F'}}>
      <Header />
      <Featured/>
      <BoulvardInfo/>
      <Highlights/>
    </div>
  );
}

export default App;
