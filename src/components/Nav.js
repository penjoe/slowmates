import React from 'react';

import { IMAGES } from '../assets/';
import Hamburger from './Hamburger.js';

const Nav = () => {
  return (
    <div className='nav'>
      <div className='logo-wrap'>
        <a href='/#'>
          <img className='nav-logo' src={IMAGES.smile} alt='' />
        </a>
        {/* <h3 className='findslowmate'>#findyourslowmate</h3> */}
      </div>
      <Hamburger />
    </div>
  )
}

export default Nav;