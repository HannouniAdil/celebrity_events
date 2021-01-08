import React from 'react';
import '../../resources/styles.css';
import Carrousel from './Carrousel';

const Featured = () => {
  return (
    <div style={{position: 'relative'}}>
      <Carrousel/>
      <div className='artist_name'>
        <div className='wrapper'>
          Ariana Grande1
        </div>
      </div>
    </div>
  );
};

export default Featured;