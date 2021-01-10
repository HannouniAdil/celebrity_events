import React from 'react';
import Fade from 'react-reveal/Fade';


const Footer = () => {
  return (
    <footer className='bck_red'>
      <Fade delay={500}>
        <div className="font_righteaous footer_logo_venue">
          The Boulvard
        </div>
        <div className="footer_copyright">
          The Boulvard 2021.All rights reserved.
        </div>
      </Fade>
    </footer>
  );
};

export default Footer;