// dependencies
import React from 'react';

import Web3 from './Web3.js';

//assets
import { IMAGES } from '../assets';

const Header = () => {
  return(
    <div className='header'>
      <div className='header-nav'>
        <h1 className='header-title'>Slowmates</h1>
        <div className="social-icons-wrap">
          <a href='#'>
            <img className='social-icons discord-icon' src={IMAGES.discord} alt='discord logo' />
          </a>
          <a href='#'>
            <img className='social-icons twitter-icon' src={IMAGES.twitter} alt='twitter logo' />
          </a>
        </div>
      </div>
      <img className='photo-board' src={IMAGES.photoBoard} alt='main-hero' />
    </div>
  );
};

export default Header;