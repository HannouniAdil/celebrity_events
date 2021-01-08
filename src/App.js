import React from 'react';
import Header from './component/header_footer/Header';
import Featured from '../src/component/featured';


function App() {
  return (
    <div className="App" style={{ height:"1500px", backgroundColor:'#0b82ed'}}>
      <Header />
      <Featured/>
    </div>
  );
}

export default App;
