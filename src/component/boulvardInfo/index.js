import React from 'react';
import icon_calendar from '../../resources/images/icons/calendar.png';
import icon_location from '../../resources/images/icons/location.png';
import Zoom from 'react-reveal/Zoom';


const BoulvardInfo = () => {
  return (
    <div className="back_black">
      <div className="center_wrapper">
        <div className="vn_wrapper">
          <Zoom duration={500}>
          <div className="vn_item">
            <div className="vn_outer">
              <div className="vn_inner">
                <div className="vn_icon_square bck_red"></div>
                <div className="vn_icon"
                  style={{
                    background:`url(${icon_calendar})`
                  }}>
                 </div>
                 <div className="vn_title">
                  Event Date & Time
                 </div>
                 <div className="vn_desc">
                  January 7th 2020 @ 09:00 pm
                 </div>
              </div>
            </div>
          </div>
          </Zoom>
          <Zoom duration={500} delay={300}>
          <div className="vn_item">
            <div className="vn_outer">
              <div className="vn_inner">
                <div className="vn_icon_square bck_yellow"></div>
                <div className="vn_icon"
                  style={{
                    background:`url(${icon_location})`
                  }}>
                 </div>
                 <div className="vn_title">
                  Event Location
                 </div>
                 <div className="vn_desc">
                  202 3th ave Charlotte, NC 2821
                 </div>
              </div>
            </div>
          </div>
          </Zoom>
        </div>
      </div>
    </div>
  );
};

export default BoulvardInfo;