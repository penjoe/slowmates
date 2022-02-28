import React, { useState } from 'react';

import RoadmapSwiper from './RoadmapSwiper.js';
import RoadmapCard from './RoadmapCard.js';
import { IMAGES } from '../assets';

const Roadmap = () => {
  
  const text1 = 'stuff about the waterfall zone';
  const text2 = 'stuff about the grasslands zone';
  const text3 = 'Coming soon...';

  return(
    <div className="roadmap">
      <h1>Welcome to Slowmates Island</h1>
      <p>Welcome to Slowmates Island!  Slowmates Island is a land of NFT adventure with lots of discovery to be made.  The Slowmates Island map features 9 distinct worlds, each with different roadmap activations that will be unlocked as we go through our journey.  As you can see in the map, two worlds Waterfall and Grasslands have already been unlocked.  What mysteries lie behind the remaining 7 worlds?</p>
      <img src={IMAGES.worldmap2} alt="" />
      <RoadmapCard img={IMAGES.waterfallZone} zoneName={'World One - Waterfall'} text={text1} />
      <RoadmapCard img={IMAGES.grasslandsZone} zoneName={'World Two - Grasslands'} text={text2} />
      <RoadmapCard img={IMAGES.volcanoZone} zoneName={'World Three - Volcano'} text={text3} />
    </div>
  );
};

export default Roadmap;