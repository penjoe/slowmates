import React from 'react';

import { IMAGES } from '../assets/';

const Nav = () => {
  return (
    <div className='nav'>
      <div className='logo-wrap'>
        <a href='/#'>
          <img className='nav-logo' src={IMAGES.smile} alt='' />
        </a>
        <h3 className='findslowmate'>#findyourslowmate</h3>
      </div>
      <div className='link-wrapper'>
        <a className='nav-links' href='/#'>Home</a>
        {/* <a className='nav-links' href='#mint-href'>Mint</a> */}
        <a className='nav-links' href='/#about'>About</a>
        <a className='nav-links' href='/#roadmap'>Roadmap</a>
        <a className='nav-links' href='/#team'>Team</a>
        <a className='nav-links' href='https://twitter.com/slowmates'>Twitter</a>
        <a className='nav-links' href='https://discord.gg/ktw4Pz5V5H'>Discord</a>
      </div>
    </div>
  )
}

export default Nav;