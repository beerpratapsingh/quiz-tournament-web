import React from 'react';

import leftImg from '../assets/images/left-top-icon.png';
import logo from '../assets/images/logo.png';
import rightImg from '../assets/images/right-top-icon.png';

const header = (props) => (
    <header>
      <span className="">
        <img src={leftImg} alt="" />        
      </span>
      <div className="logo">
        <a href="#">
          <img src={logo} alt="logo" />
        </a>
      </div>
      <span className="">
        <img src={rightImg} alt="" />        
      </span>
    </header>
  )
  
export default header;