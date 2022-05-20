import React from 'react';

const Nav = () => {
  return (
    <div className='nav'>
      <h3 className='findslowmate'>#findyourslowmate</h3>
      <div className='link-wrapper'>
        <a className='nav-links' href='/#'>Home</a>
        {/* <a className='nav-links' href='#mint-href'>Mint</a> */}
        <a className='nav-links' href='/#about-href'>About</a>
        <a className='nav-links' href='/#roadmap-href'>Roadmap</a>
        <a className='nav-links' href='/#team-href'>Team</a>
        <a className='nav-links' href='https://twitter.com/slowmates'>Twitter</a>
        <a className='nav-links' href='https://discord.gg/ktw4Pz5V5H'>Discord</a>
      </div>
    </div>
  )
}

export default Nav;