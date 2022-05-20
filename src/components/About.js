/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import Video2 from '../assets/images/Slowmates_1.mp4';

const About = () => {
  return(
    <div className="about">
      <a id='about' />
      <h1>What are Slowmates?</h1>
      <p>Slowmates is a collection of 7777 cute and sloooow NFT’s with an interactive roadmap bringing our community on a digital adventure of a lifetime. The first world alone has a token release, with several utility activations shortly after launch.</p>

      <video className='generation' autoPlay={true} muted loop src={Video2} type='video/mp4' />
    </div>
  );
};

export default About;