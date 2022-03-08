import React from 'react';

import { IMAGES } from '../assets';
import Video from '../assets/images/Generation.mp4';
import Video2 from '../assets/images/Slowmates_1.mp4';

const About = () => {
  return(
    <div className="about">
      <h1>What are Slowmates?</h1>
      <p>info about the slowmates project goes here. Should probably use some lorem ipsum here but too lazy to go get some. I'll haev to find out what the team wants to be said here. Beep boop im a robot boop boope beep...</p>

      <video className='generation' autoPlay={true} muted loop src={Video2} type='video/mp4' />
    </div>
  );
};

export default About;