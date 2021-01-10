import React, { Component } from 'react';
import MyButton from '../utils/MyButton';
import Zoom from 'react-reveal/Zoom';

class Pricing extends Component {

  state={
    prices:[100,150,250],
    position:['Balcony','Medium','Star'],
    desc:['Section: General Admission - 2 tickets remaining in this listing on our site',
        '13 tickets remainingAge restrictions may apply, please check with the venue for more details',
        'Last tickets remaining in Section General Admission VIP' ],
    linkto: ['https://sales/v', 'https://sales/b', 'https://sales/s'],
    delay: [250,0,250]    
  }

  showBoxes = () =>(
   this.state.prices.map((box, i)=>(
     <Zoom delay={this.state.delay[i]} key={i}>
        <div className='pricing_item'>
          <div className='pricing_inner_wrapper'>
            <div className='pricing_title'>
              <span>${this.state.prices[i]}</span>
              <span>${this.state.position[i]}</span>
            </div>
            <div className='pricing_description'>
            <span>{this.state.desc[i]}</span>
            </div>
            <div className='pricing_buttons'>
              <MyButton
              text="Purchase"
              bck="orange"
              color='white'
              link='https://yahoo.fr'
              />
            </div>
          </div>

        </div>
    </Zoom>
   ))
  )

  render() {
    return (
      <div className="bck_black">
        <div className="center_wrapper pricing_section">
          <h2>Pricing</h2>

          <div className="pricing_wrapper">
            {this.showBoxes()}
          </div>

        </div>
        
      </div>
    );
  }
}

export default Pricing;